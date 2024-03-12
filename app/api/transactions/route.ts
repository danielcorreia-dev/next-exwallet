import { auth } from '@/auth';
import prisma from '@/lib/prisma';

type RequestBody = {
  accountId: string;
  amount: number;
  description?: string;
  transactionTypeId: string;
  transactionCategory: string;
};

export async function POST(req: Request) {
  const res: RequestBody = await req.json();

  const session = await auth();
  if (!session?.user) {
    return Response.json(
      { error: 'Unauthorized' },
      {
        status: 401,
      }
    );
  }

  const categories = await prisma.category.findMany({
    where: {
      name: res.transactionCategory,
    },
  });

  categories.forEach(async (category) => {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {},
      create: { name: category.name },
    });
  });

  const transaction = await prisma.transaction.create({
    data: {
      accountId: res.accountId,
      amount: res.amount,
      description: res.description,
      transactionTypeId: res.transactionTypeId,
    },
  });
}

export async function GET(req: Request) {}
