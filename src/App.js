import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";
import FormError from "./components/FormError";
import FormMessage from "./components/FormMessage";
import { User } from "./components/User";
import { Counter } from "./components/Counter";
import { useState } from "react";

function App() {
  const [formState, setFormState] = useState({ username: '', password: '' });

  const isSignedIn = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  const handleChange = (event) => {
    setFormState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      <Counter initialValue={0} />
      <Counter initialValue={100} />
      {isSignedIn && <User src="/avatar.svg" username="Domagoj" />}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <InputElement name="username" label="Username" type="text" onChange={handleChange} />
        </div>
        <div className="form-field">
          <InputElement name="password" label="Password" type="password" onChange={handleChange} />
        </div>
        <div className="form-field">
          <Button type="submit">Sign in</Button>
          <Button type="reset">Reset</Button>
        </div>
        <FormError visible={!isSignedIn} />
        <FormMessage visible={isSignedIn} />
      </form>
    </div>
  );
}

export default App;
