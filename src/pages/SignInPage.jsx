import "./SignInPage.css";

import { SignInForm } from "../components/SignInForm";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function SignInPage() {
  const {storeUser} = useContext(AppContext);

  const handleSubmit = (formState) => {
    storeUser(formState);
  }

  return (
    <div className="sign-in-page">
        <SignInForm onSubmit={handleSubmit} />
    </div>
  );
}
