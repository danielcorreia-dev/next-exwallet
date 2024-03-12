import prisma from '@/lib/prisma';
import { auth } from 'auth';
import { Prisma } from '@prisma/client';

export async function POST(req: Request) {
  const res = await req.json();

  const session = await auth();
  if (!session?.user) {
    return Response.json(
      { error: 'Unauthorized' },
      {
        status: 401,
      }
    );
  }

  if (!res.accountName) {
    return Response.json(
      { error: 'Account name is required' },
      {
        status: 400,
      }
    );
  }

  if (session.user && session.user.email) {
    console.log(session);
    const userId = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
      },
    });

    if (!userId) {
      return Response.json(
        { error: 'User not found' },
        {
          status: 404,
        }
      );
    }

    const createdAccount = await prisma.account.create({
      data: {
        name: res.accountName,
        userId: userId?.id,
        status: 'ACTIVE',
      },
    });

    return Response.json(createdAccount, {
      status: 201,
    });
  }
}

export async function GET(req: Request) {
  const session = await auth();

  if (!session?.user) {
    return {
      status: 401,
      body: { error: 'Unauthorized' },
    };
  }

  if (session.user.id) {
    const accounts = await prisma.account.findMany({
      where: {
        userId: session.user.id,
      },
    });

    return {
      status: 200,
      body: accounts,
    };
  }
}
