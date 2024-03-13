import { auth } from '@/auth';
import prisma from '@/lib/prisma';

export async function DELETE({ params }: { params: { id: string } }) {
  const session = await auth();

  if (!session?.user) {
    return {
      status: 401,
      body: { error: 'Unauthorized' },
    };
  }

  const account = await prisma.account.delete({
    where: {
      id: params.id,
    },
  });

  if (!account) {
    return Response.json('Account not found', {
      status: 404,
    });
  }

  return Response.json(account);
}
