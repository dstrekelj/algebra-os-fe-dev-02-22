import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";

function FormError(props) {
  if (!props.visible) return null;

  return <div className="form-error">Failed to sign in!</div>;
}

function FormMessage(props) {
  if (!props.visible) return null;

  return <div className="form-message">Successfully signed in!</div>;
}

function App() {
  const isSignedIn = true;

  return (
    <form className="form">
      <div className="form-field">
        <InputElement label="Username" type="text" />
      </div>
      <div className="form-field">
        <InputElement label="Password" type="password" />
      </div>
      <div className="form-field">
        <Button type="button">Sign in</Button>
        <Button type="reset">Reset</Button>
      </div>
      <FormError visible={!isSignedIn} />
      <FormMessage visible={isSignedIn} />
    </form>
  );
}

export default App;
