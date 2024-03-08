import SignInForm from '@/components/auth/sign-in-form';
import SignInWrapper from '@/components/auth/sign-in-wrapper';

type Props = Readonly<{}>;

const SignInPage = (props: Props) => {
  return (
    <main className="h-dvh flex justify-center items-center">
      <SignInWrapper />
    </main>
  );
};

export default SignInPage;
