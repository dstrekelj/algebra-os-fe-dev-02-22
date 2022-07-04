import Button from "../components/Button";
import { InputElement } from "../components/InputElement";
import { User } from "../components/User";
import { useState } from "react";

export function ChatRoomPage(props) {
  const [formState, setFormState] = useState({ message: '' });
  const [messages, setMessages] = useState([]);
  const [settingsFormState, setSettingsFormState] = useState({
    username: props.user.username,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.message !== '') {
      setMessages((state) => [
        ...state,
        { ...formState, author: props.user.username },
      ]);
      setFormState({ message: '' });
    }
  }
  
  const handleChange = (event) => {
    setFormState((state) => ({
          ...state,
          [event.target.name]: event.target.value,
    }));
  }

  const handleSettingsSubmit = (event) => {
    event.preventDefault();
    console.log(settingsFormState);
  }

  const handleSettingsChange = (event) => {
    setSettingsFormState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }

  const messageElements = messages.map((item, index) => (
    <div key={index}>
      <div>{item.author}</div>
      <div>{item.message}</div>
    </div>
  ));

  return (
    <div>
      <Button type="button" onClick={props.onSignOut}>Sign out</Button>
      <User src="/avatar.svg" username={props.user.username} />

      <form className="form" onSubmit={handleSettingsSubmit}>
        <div className="form-field">
          <InputElement name="username"
            label="Username"
            type="text"
            onChange={handleSettingsChange}
            value={settingsFormState.username}
          />
        </div>
        <div className="form-field">
          <Button type="submit">Update</Button>
        </div>
      </form>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <InputElement name="message"
            label="Message"
            type="text"
            onChange={handleChange}
            value={formState.message} />
        </div>
        <div className="form-field">
          <Button type="submit">Send</Button>
        </div>
      </form>
      {messageElements}
    </div>
  );
}
