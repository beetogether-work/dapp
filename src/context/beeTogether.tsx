import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { useAccount } from 'wagmi';
import { getUserByAddress, getUserById } from '../queries/users';
import { IAccount, IHive, IUser } from '../types';
import { getHiveByMemberId } from '../queries/hive';

const BeeTogetherContext = createContext<{
  user?: IUser;
  account?: IAccount;
  isActiveDelegate: boolean;
  hive?: IHive;
}>({
  user: undefined,
  account: undefined,
  isActiveDelegate: false,
  hive: undefined,
});

const BeeTogetherProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>();
  const [hive, setHive] = useState<IHive | undefined>();
  const account = useAccount();
  const [isActiveDelegate, setIsActiveDelegate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!account.address || !account.isConnected) {
        return;
      }

      try {
        console.log('FETCH DATA');
        const response = await getUserByAddress(account.address);

        if (response?.data?.data?.users?.length == 0) {
          return false;
        }

        const currentUser = response.data.data.users[0];
        console.log('FETCH DATA', currentUser.handle);
        const responseHive = await getHiveByMemberId(currentUser.id);
        const currentHive: IHive = responseHive?.data?.data?.hives[0];
        if (!currentHive) {
          return false;
        }

        const responseHiveTL = await getUserById(currentHive.id);
        currentHive.identity = responseHiveTL.data.data.user;

        console.log('FETCH DATA AFTER', {
          currentUser,
          responseHive,
          currentHive,
        });

        setUser(currentUser);
        setHive(currentHive);
        setIsActiveDelegate(
          process.env.NEXT_PUBLIC_ACTIVE_DELEGATE &&
            response.data.data.users[0].delegates &&
            response.data.data.users[0].delegates.indexOf(
              (process.env.NEXT_PUBLIC_DELEGATE_ADDRESS as string).toLowerCase(),
            ) !== -1,
        );
        return true;
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
    setInterval(() => {
      fetchData();
    }, 10000);
  }, [account.address, account.isConnected, isActiveDelegate, hive]);

  const value = useMemo(() => {
    return {
      user,
      account: account ? account : undefined,
      isActiveDelegate,
      hive,
    };
  }, [account.address, user?.id, isActiveDelegate, hive]);

  return <BeeTogetherContext.Provider value={value}>{children}</BeeTogetherContext.Provider>;
};

export { BeeTogetherProvider };

export default BeeTogetherContext;
