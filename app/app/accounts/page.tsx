import prisma from '@/lib/prisma';
import { auth } from 'auth';
import { redirect } from 'next/navigation';

const AccountPage = async () => {
  const session = await auth();
  const user = session?.user;

  if (user) {
    const accounts = await prisma.account.findMany({
      where: {
        userId: user.id,
      },
    });

    if (!accounts.length) {
      redirect('/app/accounts/first-account');
    }
  }
};

export default AccountPage;
