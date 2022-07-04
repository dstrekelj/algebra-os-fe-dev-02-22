import Button from "../components/Button";
import { InputElement } from "../components/InputElement";
import { useState } from "react";

export function SettingsForm(props) {
  const [formState, setFormState] = useState({
    displayName: props.user.username,
    textColor: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formState);
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
        <InputElement name="displayName"
          label="Display name"
          type="text"
          onChange={handleChange}
          value={formState.displayName}
        />
      </div>
      <div className="form-field">
        <InputElement name="textColor"
          label="Text color"
          type="text"
          onChange={handleChange}
          value={formState.textColor}
        />
      </div>
      <div className="form-field">
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
}
