import "./ChatRoomPage.css";

import Button from "../components/Button";
import { User } from "../components/User";
import { useState } from "react";
import { SettingsForm } from "../components/SettingsForm";
import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";

export function ChatRoomPage(props) {
  const [messages, setMessages] = useState([]);
  const [settings, setSettings] = useState({});

  const updateSettings = (settings) => {
    setSettings({ ...settings });
  }

  const handleSubmit = (formState) => {
    setMessages((state) => [
      ...state,
      {
        ...formState,
        author: props.user.username,
        settings: { ...settings },
      },
    ]);
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
          <MessageForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
