import "./ChatRoomPage.css";

import Button from "../components/Button";
import { InputElement } from "../components/InputElement";
import { User } from "../components/User";
import { useState } from "react";
import { SettingsForm } from "../components/SettingsForm";
import { Message } from "../components/Message";

export function ChatRoomPage(props) {
  const [formState, setFormState] = useState({ message: '' });
  const [messages, setMessages] = useState([]);
  const [settings, setSettings] = useState({});

  const updateSettings = (settings) => {
    setSettings({ ...settings });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.message !== '') {
      setMessages((state) => [
        ...state,
        {
          ...formState,
          author: props.user.username,
          settings: { ...settings },
        },
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

  const messageElements = messages.map((item, index) => (
    <Message
      key={index}
      settings={item.settings}
      author={item.author}
      message={item.message}
    />
  ));

  return (
    <div className="chat-room-page">
      <div className="chat-room-page__settings">
        <div className="chat-room-page__settings-row">
          <User src="/avatar.svg" username={props.user.username} />
        </div>
        <div className="chat-room-page__settings-row">
          <Button type="button" onClick={props.onSignOut}>Sign out</Button>
        </div>
        <div className="chat-room-page__settings-row">
          <SettingsForm user={props.user} onSubmit={updateSettings} />
        </div>
      </div>
      <div className="chat-room-page__chat">
        <div className="chat-room-page__chat-message-list">
          {messageElements}
        </div>
        <div className="chat-room-page__chat-message-form">
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
        </div>
      </div>
    </div>
  );
}
