import { useEffect, useState } from 'react';
import HiveInviteForm from '../../components/Form/HiveInviteForm';
import Logo from '../../components/Layout/Logo';
import LeftSide from '../../components/onboarding/LeftSide';
import { getHiveByAddress } from '../../queries/hive';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import { getUserById } from '../../queries/users';
import { useChainId } from '../../hooks/useChainId';

function Invite() {
  const chainId = useChainId();

  const router = useRouter();
  const query = router.query;
  const [hive, setHive] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (!query.address) {
        return;
      }
      const responseHive = await getHiveByAddress(chainId, query.address as string);
      const currentHive = responseHive.data?.data?.hives[0];
      if (currentHive) {
        const responseOwner = await getUserById(chainId, currentHive.owner);
        currentHive.ownerIdentity = responseOwner?.data?.data?.user;

        const responseIdentity = await getUserById(chainId, currentHive.id);
        currentHive.identity = responseIdentity?.data?.data?.user;
        setHive(currentHive);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <div className='h-screen md:flex'>
        <LeftSide
          title='Work together easly'
          subtext="You'have been invited to be part of a new collective. You will have here all the tools to grow your business and collaborate effectively."></LeftSide>

        <div className='flex flex-col items-center justify-between py-10 md:w-1/2'>
          <div className='mx-auto flex w-full max-w-xs items-center justify-between px-3'>
            <Logo />
          </div>
          {hive ? <HiveInviteForm hive={hive} /> : <Loading />}
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Invite;
