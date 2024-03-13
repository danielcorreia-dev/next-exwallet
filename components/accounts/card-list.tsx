'use client';

import { WalletIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';

type CardListProps = {
  accounts: any;
};

const CardList = ({ accounts }: CardListProps) => {
  if (accounts.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-muted-foreground">No accounts found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {accounts.map((account: any) => {
        return (
          <Link
            key={account.id}
            href={`/app/accounts/${account.id}`}
            className="hover:brightness-150 transition-[filter]"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-md flex gap-4">
                  <WalletIcon size={24} />
                  {account.name}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;
