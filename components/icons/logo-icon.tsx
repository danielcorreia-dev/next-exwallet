'use client';

import WalletIcon from '@/public/exwallet.svg';
import WhiteWalletIcon from '@/public/exwallet-white.svg';
import LogoOnly from '@/public/logo-only.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';

type LogoIconProps = {
  logoOnly?: boolean;
};

const LogoIcon = ({ logoOnly }: LogoIconProps) => {
  const [image, setImage] = useState(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setImage(WhiteWalletIcon);
    } else {
      setImage(WalletIcon);
    }
  }, [resolvedTheme]);

  if (logoOnly) {
    return <Image src={LogoOnly} alt="ExWallet Logo" />;
  }

  if (!image) {
    return <Skeleton className="size-10 rounded-full bg-white/20" />;
  }

  return <Image src={image} alt="ExWallet Logo" />;
};

export default LogoIcon;
