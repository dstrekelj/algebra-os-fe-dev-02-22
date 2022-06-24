import "./App.css";

function InputElement({ label, type }) {
  return (
    <label>
      <div className="label">{label}</div>
      <input className="input" type={type} />
    </label>
  );
}

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
        <button className="button">Sign in</button>
      </div>
    </form>
  );
}

export default App;
