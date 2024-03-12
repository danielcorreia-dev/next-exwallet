'use client';

import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import { LogosGoogleIcon } from '../icons/google-icon';

const handleGoogleSignIn = async () => {
  signIn('google', {
    callbackUrl: '/app/accounts',
  });
};

const GoogleSignInButton = () => {
  return (
    <Button
      className="w-full bg-neutral-0 border-neutral-200 border p-5 py-6 hover:bg-neutral-50 bg-white dark:bg-neutral-700 dark:border-neutral-800 dark:hover:bg-neutral-600"
      onClick={handleGoogleSignIn}
    >
      <LogosGoogleIcon className="w-6 h-6 mr-2" />
      <span className="text-neutral-600 dark:text-neutral-50">
        Entre com Google
      </span>
    </Button>
  );
};

export default GoogleSignInButton;
