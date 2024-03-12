import Image from 'next/image';
import GoogleSignInButton from './google-sign-in-button';
import WhiteLogo from '@/public/exwallet-white.svg';
import LogoIcon from '../icons/logo-icon';

const SignInWrapper = () => {
  return (
    <div className="px-4 py-8 max-w-sm w-full border text-center bg-neutral-50 rounded dark:bg-neutral-800 shadow-md">
      <div className="mb-8 space-y-2">
        <div className="relative size-12 mx-auto">
          <LogoIcon logoOnly />
        </div>
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <span className="text-neutral-400">Para entrar em ExWallet</span>
      </div>
      <GoogleSignInButton />
    </div>
  );
};

export default SignInWrapper;
