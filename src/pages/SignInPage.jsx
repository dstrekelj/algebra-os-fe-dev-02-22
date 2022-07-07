import "./SignInPage.css";

import { SignInForm } from "../components/SignInForm";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";

export function SignInPage() {
  const {storeUser} = useContext(AppContext);

  const handleSubmit = (formState) => {
    storeUser(formState);
  }

  return (
    <div className="sign-in-page">
        <SignInForm onSubmit={handleSubmit} />
        <Link to="/tos">Terms of Service</Link>
    </div>
  );
}
