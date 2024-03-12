import FirstAccountForm from '@/components/accounts/first-account-form';
import LogoutButton from '@/components/auth/logout-button';
import LogoIcon from '@/components/icons/logo-icon';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <div className="fixed p-7 w-full flex justify-end z-50">
        <LogoutButton />
      </div>
      <div className="h-dvh flex flex-col justify-center items-center relative">
        <div className="text-center mb-12 space-y-3">
          <div className="size-8 mx-auto">
            <LogoIcon logoOnly />
          </div>
          <h2 className="font-semibold text-xl">Crie a sua primeira conta!</h2>
          <p>Sua conta é responsável por gerenciar suas transações</p>
        </div>
        <FirstAccountForm />
      </div>
    </>
  );
};

export default Page;
