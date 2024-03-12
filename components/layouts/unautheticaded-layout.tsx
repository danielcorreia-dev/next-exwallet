import React, { PropsWithChildren } from 'react';
import ThemeToggle from '../ui/theme-toggle';
import LogoIcon from '../icons/logo-icon';
import Link from 'next/link';

const UnauthenticatedLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <nav className="py-4 bg-neutral-50 dark:bg-neutral-800 relative border-b shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={'/auth/signin'} className="relative h-auto w-14">
            <LogoIcon />
          </Link>
          <ThemeToggle />
        </div>
      </nav>
      {children}
    </>
  );
};

export default UnauthenticatedLayout;
