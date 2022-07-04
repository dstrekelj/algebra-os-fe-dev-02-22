import "./Avatar.css";

export function Avatar(props) {
  const avatarAlt = "Avatar " + props.username;
  const avatarSrc = props.src || "/avatar.svg";

  return <img className="avatar" src={avatarSrc} alt={avatarAlt} />;
}
