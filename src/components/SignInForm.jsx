import "./SignInForm.css";

import { InputElement } from "../components/InputElement";
import Button from "../components/Button";
import FormError from "../components/FormError";
import { useState } from "react";

export function SignInForm(props) {
  const [formState, setFormState] = useState({ username: '' });
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.username === '') {
      setError(true);
    } else {
      setError(null);
      setFormState({ username: '' });
      props.onSubmit(formState);
    }
  }

  const handleChange = (event) => {
    setFormState((state) => ({
          ...state,
          [event.target.name]: event.target.value,
    }));
  }

  const showErrorMessage = error !== null;

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <div className="sign-in-form__field">
        <div className="sign-in-form__field-element">
          <InputElement
            name="username"
            label="Username"
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="sign-in-form__field">
        <div className="sign-in-form__field-action">
          <Button type="submit">Sign in</Button>
        </div>
      </div>
      <div className="sign-in-form__error">
        <FormError visible={showErrorMessage} />
      </div>
    </form>
  );
}
