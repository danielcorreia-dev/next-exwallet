import React from 'react';
import SignInForm from './sign-in-form';
import GoogleSignInButton from './google-sign-in-button';
import Link from 'next/link';

type Props = {};

const SignInWrapper = (props: Props) => {
  return (
    <div className="px-4 py-8 max-w-sm w-full">
      <div>
        <h1 className="text-2xl font-bold mb-8">Login</h1>
        <GoogleSignInButton />
        <div>
          <p className="text-sm text-gray-500 mt-4">
            Não tem uma conta?{' '}
            <Link
              href="/sign-up"
              className="text-blue-600 hover:text-blue-600 hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
      <SignInForm />
    </div>
  );
};

export default SignInWrapper;
