import SignInWrapper from '@/components/auth/sign-in-wrapper';
import { auth } from 'auth';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Login',
};

const SignInPage = async () => {
  const session = await auth();

  if (session) {
    redirect('/app/accounts');
  }
  return (
    <main className="flex justify-center items-center h-full my-auto flex-1 py-64">
      <SignInWrapper />
    </main>
  );
};

export default SignInPage;
