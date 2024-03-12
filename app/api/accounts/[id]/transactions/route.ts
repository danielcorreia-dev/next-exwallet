import { auth } from '@/auth';
import prisma from '@/lib/prisma';

export async function GET({ params }: { params: { id: string } }) {
  const session = await auth();

  if (!session?.user) {
    return {
      status: 401,
      body: { error: 'Unauthorized' },
    };
  }

  const transactions = await prisma.transaction.findMany({
    where: {
      accountId: params.id,
    },
  });

  if (!transactions) {
    return Response.json('Transactions not found', {
      status: 404,
    });
  }

  return Response.json(transactions);
}
