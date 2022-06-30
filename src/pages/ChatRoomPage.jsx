import Button from "../components/Button";
import { User } from "../components/User";

export function ChatRoomPage(props) {
  return (
    <div>
      <Button type="button" onClick={props.onSignOut}>Sign out</Button>
      <User src="/avatar.svg" username={props.user.username} />
    </div>
  );
}
