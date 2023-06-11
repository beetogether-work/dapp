import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useAccount } from 'wagmi';
import { getUserByAddress, getUserById, getUserByIds } from '../queries/users';
import { IAccount, IHive, IUser } from '../types';
import { getHiveByMemberId } from '../queries/hive';
import { useChainId } from '../hooks/useChainId';

const BeeTogetherContext = createContext<{
  user?: IUser;
  account?: IAccount;
  isActiveDelegate: boolean;
  hive?: IHive;
  refreshData?: () => void;
  loading: boolean;
  membersIdentities: IUser[];
}>({
  user: undefined,
  account: undefined,
  isActiveDelegate: false,
  hive: undefined,
  loading: true,
  membersIdentities: [],
});

const BeeTogetherProvider = ({ children }: { children: ReactNode }) => {
  const chainId = useChainId();
  const [user, setUser] = useState<IUser | undefined>();
  const [membersIdentities, setMembersIdentities] = useState<IUser[]>([]);
  const [hive, setHive] = useState<IHive | undefined>();
  const account = useAccount();
  const [isActiveDelegate, setIsActiveDelegate] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!account.address || !account.isConnected || !!hive?.id) {
      setLoading(false);
      return false;
    }

    try {
      const response = await getUserByAddress(chainId, account.address);

      if (response?.data?.data?.users?.length == 0) {
        return false;
      }

      const currentUser = response.data.data.users[0];
      const responseHive = await getHiveByMemberId(chainId, currentUser.id);
      const currentHive: IHive = responseHive?.data?.data?.hives[0];
      if (!currentHive) {
        setUser(currentUser);
        return false;
      }

      const responseHiveTL = await getUserById(chainId, currentHive.id);
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
      setLoading(false);
      return true;
    } catch (err: any) {
      setLoading(false);
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [chainId, account.address, account.isConnected, isActiveDelegate, hive]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [fetchData]);

  useEffect(() => {
    if (!hive || hive.members.length == 0) {
      return;
    }

    const fetch = async () => {
      const response = await getUserByIds(chainId, hive.members);
      const users = response?.data?.data?.users;
      const reindexedUsers = users.reduce((acc: any, user: IUser) => {
        acc[user.id] = user;
        return acc;
      }, {});
      setMembersIdentities(reindexedUsers);
    };

    fetch();
  }, [hive?.members.length]);

  const value = useMemo(() => {
    return {
      user,
      account: account ? account : undefined,
      isActiveDelegate,
      hive,
      refreshData: fetchData,
      loading,
      membersIdentities,
    };
  }, [account.address, user?.id, isActiveDelegate, hive, membersIdentities, loading]);

  return <BeeTogetherContext.Provider value={value}>{children}</BeeTogetherContext.Provider>;
};

export { BeeTogetherProvider };

export default BeeTogetherContext;
