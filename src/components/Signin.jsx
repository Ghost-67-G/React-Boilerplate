import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <SignIn signUpUrl={process.env.REACT_APP_URL + "/signup"}/>
  );
}
