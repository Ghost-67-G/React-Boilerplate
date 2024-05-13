import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (<div className="flex items-center justify-center h-screen">
    <SignIn signUpUrl={process.env.REACT_APP_URL + "/signup"}/>
  </div>
  );
}
