import { PropsWithChildren } from 'react';

const AppLayout = async ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default AppLayout;
