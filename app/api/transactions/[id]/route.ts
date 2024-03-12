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

  const transaction = await prisma.transaction.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!transaction) {
    return Response.json('Transaction not found', {
      status: 404,
    });
  }

  return Response.json(transaction);
}
