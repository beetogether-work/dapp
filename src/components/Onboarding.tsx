import Steps from './Steps';

function Onboarding() {
  return (
    <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
      <p className='text-3xl font-light mb-8'>
        Setup <span className='text-gray-100'>your wallet </span>
      </p>

      <Steps />
    </div>
  );
}

export default Onboarding;
