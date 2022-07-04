import Button from "../components/Button";
import { InputElement } from "../components/InputElement";
import { useState } from "react";

export function SettingsForm(props) {
  const [formState, setFormState] = useState({
    username: props.user.username,
  });

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
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <InputElement name="username"
          label="Username"
          type="text"
          onChange={handleChange}
          value={formState.username}
        />
      </div>
      <div className="form-field">
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
}
