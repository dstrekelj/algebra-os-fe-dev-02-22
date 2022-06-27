import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";

function App() {
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
    </form>
  );
}

export default App;
