import "./App.css";
import { useContext } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatRoomPage } from "./pages/ChatRoomPage";
import { AppContext } from "./contexts/AppContext";

function App() {
  const {user} = useContext(AppContext);

  const isSignedIn = user !== null;

  return (
    <div>
      {isSignedIn && <ChatRoomPage />}
      {!isSignedIn && <SignInPage />}
    </div>
  );
}

export default App;
