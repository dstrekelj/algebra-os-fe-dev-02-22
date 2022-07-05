import "./SignInPage.css";

import { SignInForm } from "../components/SignInForm";

export function SignInPage(props) {
  const handleSubmit = (formState) => {
    props.onSignIn(formState);
  }

  return (
    <div className="sign-in-page">
        <SignInForm onSubmit={handleSubmit} />
    </div>
  );
}
