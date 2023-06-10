import { useContext } from 'react';
import Steps from '../../../components/Steps';
import TalentLayerContext from '../../../context/talentLayer';
import HiveForm from '../../../components/Form/HiveForm';

function ConfigureHive() {
  const { account, user } = useContext(TalentLayerContext);

  if (!account?.isConnected) {
    return <Steps />;
  }

  return (
    <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
      <div className=' -mx-6 -mt-6 '>
        <p className='flex py-2 px-4 items-center text-2xl font-medium tracking-wider mb-8 border-b w-full border-gray-700 md:px-8'>
          Edit your <span className='text-gray-100 ml-1'> Hive </span>
        </p>
      </div>

      {account?.isConnected && user && <HiveForm />}
    </div>
  );
}

export default ConfigureHive;
