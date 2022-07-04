import Button from "../components/Button";
import { InputElement } from "../components/InputElement";
import { useState } from "react";
import { SelectElement } from "./SelectElement";
import { CheckboxElement } from "./CheckboxElement";

export function SettingsForm(props) {
  const [formState, setFormState] = useState({
    displayName: props.user.username,
    textColor: '',
    backgroundColor: '',
    showAvatar: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    props.onSubmit(formState);
  }

  const handleChange = (event) => {
    let value = undefined;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    setFormState((state) => ({
      ...state,
      [event.target.name]: value,
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
        <SelectElement
          label="Background color"
          name="backgroundColor"
          onChange={handleChange}
          value={formState.backgroundColor}
          options={[
            { value: "black", label: "Black" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
            { value: "", label: "None" },
            { value: "red", label: "Red" },
            { value: "white", label: "White" },
          ]}
        />
      </div>
      <div className="form-field">
        <CheckboxElement
          label="Show avatar"
          name="showAvatar"
          onChange={handleChange}
          checked={formState.showAvatar}
        />
      </div>
      <div className="form-field">
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
}
