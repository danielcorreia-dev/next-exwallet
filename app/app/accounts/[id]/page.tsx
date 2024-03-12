import { auth } from '@/auth';
import prisma from '@/lib/prisma';
import React from 'react';

const ShowAccountPage = async ({ params }: { params: { id: string } }) => {
  const session = await auth();

  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    if (user) {
      const account = await prisma.account.findUnique({
        where: {
          id: params.id,
        },
      });

      if (account?.userId === user.id) {
        return <div>teste</div>;
      }
    }
  }
};

export default ShowAccountPage;
