import HiveInviteForm from '../../components/Form/HiveInviteForm';
import Logo from '../../components/Layout/Logo';
import LeftSide from '../../components/onboarding/LeftSide';

function Invite() {
  return (
    <div>
      <div className='h-screen md:flex'>
        <LeftSide
          title='Work together easly'
          subtext="You'have been invited to be part of a new collective. You will have here all the tools to grow your business and collaborate effectively."></LeftSide>

        <div className='flex flex-col items-center justify-between py-10 md:w-1/2'>
          <div className='mx-auto flex w-full max-w-xs items-center justify-between'>
            <a href='/' className='hover:text-primary-500 transition-colors duration-300 px-2'>
              <Logo />
            </a>
          </div>
          <HiveInviteForm />

          <div className='text-center'>
            <p className='font-sans text-sm font-normal leading-normal text-gray-400 mt-10'>
              © 2023 BeeTogether. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite;
