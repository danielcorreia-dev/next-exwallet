'use client';

import { signOut } from 'next-auth/react';

type Props = {};

const LogoutButton = (props: Props) => {
  return (
    <button
      title="logout"
      onClick={() => signOut()}
      className="text-red-200 text-sm hover:text-red-500 cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
