import "./Avatar.css";

export function Avatar(props) {
  const avatarAlt = "Avatar " + props.username;

  return <img className="avatar" src={props.src} alt={avatarAlt} />;
}
