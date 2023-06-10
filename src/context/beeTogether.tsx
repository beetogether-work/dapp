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
  refreshData?: () => void;
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

  const fetchData = async () => {
    if (!account.address || !account.isConnected || !!hive?.id) {
      return false;
    }

    try {
      const response = await getUserByAddress(account.address);

      if (response?.data?.data?.users?.length == 0) {
        return false;
      }

      const currentUser = response.data.data.users[0];
      const responseHive = await getHiveByMemberId(currentUser.id);
      const currentHive: IHive = responseHive?.data?.data?.hives[0];
      if (!currentHive) {
        return false;
      }

      const responseHiveTL = await getUserById(currentHive.id);
      currentHive.identity = responseHiveTL.data.data.user;

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

  useEffect(() => {
    fetchData();
  }, [account.address, account.isConnected, isActiveDelegate, hive]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [fetchData]);

  const value = useMemo(() => {
    return {
      user,
      account: account ? account : undefined,
      isActiveDelegate,
      hive,
      refreshData: fetchData,
    };
  }, [account.address, user?.id, isActiveDelegate, hive]);

  return <BeeTogetherContext.Provider value={value}>{children}</BeeTogetherContext.Provider>;
};

export { BeeTogetherProvider };

export default BeeTogetherContext;
