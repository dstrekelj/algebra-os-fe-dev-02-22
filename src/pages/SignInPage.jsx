import { InputElement } from "../components/InputElement";
import Button from "../components/Button";
import FormError from "../components/FormError";
import FormMessage from "../components/FormMessage";
import { useState } from "react";

export function SignInPage(props) {
  const [formState, setFormState] = useState({ username: '' });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.username === '') {
      setError(true);
    } else {
      setUser(formState);
      props.onSignIn(formState);
      setError(null);
      setFormState({ username: '' });
    }
  }

  const handleChange = (event) => {
    setFormState((state) => ({
          ...state,
          [event.target.name]: event.target.value,
    }));
  }

  const showErrorMessage = error !== null;
  const showFormMessage = user !== null;

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <InputElement name="username" label="Username" type="text" onChange={handleChange} />
        </div>
        <div className="form-field">
          <Button type="submit">Sign in</Button>
        </div>
        <FormError visible={showErrorMessage} />
        <FormMessage visible={showFormMessage} />
      </form>
    </div>
  );
}
