import "./User.css";
import { Avatar } from "./Avatar";

export function User(props) {
  return (
    <div className="user">
      <Avatar src={props.src} username={props.username} />
      <div>{props.username}</div>
    </div>
  );
}
