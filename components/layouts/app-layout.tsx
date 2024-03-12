import { PropsWithChildren } from 'react';
import LogoIcon from '../icons/logo-icon';
import { auth } from '@/auth';
import Image from 'next/image';
import { UserNav } from '../ui/user-nav';
import Link from 'next/link';

const AppLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();

  const img = session?.user?.image;

  return (
    <>
      <nav className="p-4 py-5 bg-neutral-900 border-b ">
        <div className="flex justify-between items-center container">
          <Link href={'/app/accounts'} className="w-10 h-auto">
            <LogoIcon logoOnly />
          </Link>
          <UserNav user={session?.user} />
        </div>
      </nav>
      <section className="pt-8 container">{children}</section>
    </>
  );
};

export default AppLayout;
