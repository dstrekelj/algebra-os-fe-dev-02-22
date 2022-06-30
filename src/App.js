import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";
import FormError from "./components/FormError";
import FormMessage from "./components/FormMessage";
import { User } from "./components/User";
import { useState } from "react";

function App() {
  const [formState, setFormState] = useState({ username: '' });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.username === '') {
      setError(true);
    } else {
      setUser(formState);
      setError(null);
    }
  }

  const handleChange = (event) => {
    setFormState((state) => ({
          ...state,
          [event.target.name]: event.target.value,
    }));
  }

  const signOut = () => {
    setUser(null);
    setError(null);
  }

  const isSignedIn = user !== null;
  const showErrorMessage = error !== null;
  const showFormMessage = user !== null;

  return (
    <div>
      {isSignedIn && <Button type="button" onClick={signOut}>Sign out</Button>}
      {isSignedIn && <User src="/avatar.svg" username={user.username} />}
      {!isSignedIn && <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <InputElement name="username" label="Username" type="text" onChange={handleChange} />
        </div>
        <div className="form-field">
          <Button type="submit">Sign in</Button>
        </div>
        <FormError visible={showErrorMessage} />
        <FormMessage visible={showFormMessage} />
      </form>}
    </div>
  );
}

export default App;
