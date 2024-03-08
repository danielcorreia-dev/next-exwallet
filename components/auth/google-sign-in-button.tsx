'use client';

import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import { LogosGoogleIcon } from '../icons/google-icon';

const handleGoogleSignIn = async () => {
  signIn('google');
};

const GoogleSignInButton = () => {
  return (
    <Button
      className="w-full bg-neutral-0 border-neutral-200 border p-5 hover:bg-neutral-50"
      onClick={handleGoogleSignIn}
    >
      <LogosGoogleIcon className="w-6 h-6 mr-2" />
      <span className="text-neutral-600">Entre com Google</span>
    </Button>
  );
};

export default GoogleSignInButton;
