import "./Message.css";

import { Avatar } from "./Avatar";

export function Message(props) {
  const style = {
    backgroundColor: props.settings.backgroundColor || "transparent",
    color: props.settings.textColor || "black",
  };

  const author = props.settings.displayName || props.author;
  const avatarSrc = props.settings.avatarUrl || "/avatar.svg";

  return (
    <div className="message" style={style}>
      {props.settings.showAvatar && <div className="message__avatar">
        <Avatar username={author} src={avatarSrc} />
      </div>}
      <div className="message__author">{author}</div>
      <div className="message__text">{props.message}</div>
    </div>
  );
}
