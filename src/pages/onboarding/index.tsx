import HiveCreationForm from '../../components/Form/HiveCreationForm';
import Logo from '../../components/Layout/Logo';
import LeftSide from '../../components/onboarding/LeftSide';

function Onboarding() {
  return (
    <div>
      <div className='h-screen md:flex'>
        <LeftSide
          title='Work together easly'
          subtext="You're in the perfect place to start your new collective, you will have here all the tools to grow your business and collaborate effectively."></LeftSide>

        <div className='flex flex-col items-center justify-between py-10 md:w-1/2'>
          <div className='mx-auto flex w-full max-w-xs items-center justify-between px-3'>
            <Logo />
          </div>
          <HiveCreationForm />
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
