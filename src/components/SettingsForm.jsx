import Button from "../components/Button";
import { InputElement } from "../components/InputElement";
import { useState } from "react";

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
        <label htmlFor="background-color">
          Background color
        </label>
        <select id="background-color"
          name="backgroundColor"
          onChange={handleChange}
          value={formState.backgroundColor}
        >
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="">None</option>
          <option value="red">Red</option>
          <option value="white">White</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="showAvatar"
            onChange={handleChange}
            checked={formState.showAvatar}
          />
          Show avatar
        </label>
      </div>
      <div className="form-field">
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
}
