import UnauthenticatedLayout from '@/components/layouts/unautheticaded-layout';
import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => (
  <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
);
export default Layout;
