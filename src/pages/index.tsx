import { useContext } from 'react';
import Steps from '../components/Steps';
import TalentLayerContext from '../context/talentLayer';

function Home() {
  const { account } = useContext(TalentLayerContext);

  if (!account?.isConnected) {
    return <Steps />;
  }

  return (
    <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
      <p className='text-3xl font-medium mb-8'>
        Your <span className='text-gray-100'>hive </span>
      </p>
    </div>
  );
}

export default Home;
