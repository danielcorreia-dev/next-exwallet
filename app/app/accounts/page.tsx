import CardList from '@/components/accounts/card-list';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';
import { auth } from 'auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const AccountPage = async () => {
  const session = await auth();
  const user = session?.user;
  let accounts;

  if (user) {
    accounts = await prisma.account.findMany({
      where: {
        userId: user.id,
      },
    });

    if (!accounts.length) {
      redirect('/app/accounts/first-account');
    }
  }

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-semibold">Contas</h1>
          <span className="text-neutral-500 text-sm">
            Visualize o seu porfólio de contas
          </span>
        </div>
        <Link href={'/app/accounts/first-account'}>
          <Button variant={'secondary'}>Adicionar conta</Button>
        </Link>
      </div>
      <div className="pt-12">
        <CardList accounts={accounts} />
      </div>
    </section>
  );
};

export default AccountPage;
