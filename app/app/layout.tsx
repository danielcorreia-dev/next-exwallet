import AppLayout from '@/components/layouts/app-layout';
import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Layout;
