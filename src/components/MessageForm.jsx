import "./MessageForm.css";

import Button from "../components/Button";
import { InputElement } from "../components/InputElement";
import { useState } from "react";

export function MessageForm(props) {
  const [formState, setFormState] = useState({ message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.message !== '') {
      props.onSubmit(formState);
      setFormState({ message: '' });
    }
  }

  const handleChange = (event) => {
    setFormState((state) => ({
          ...state,
          [event.target.name]: event.target.value,
    }));
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <div className="message-form__field">
        <div className="message-form__field-element">
          <InputElement
            name="message"
            label="Message"
            type="text"
            onChange={handleChange}
            value={formState.message}
          />
        </div>
      </div>
      <div className="message-form__field">
        <div className="message-form__field-action">
          <Button type="submit">Send</Button>
        </div>
      </div>
    </form>
  );
}
