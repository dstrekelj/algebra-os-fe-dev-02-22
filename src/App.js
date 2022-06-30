import "./App.css";
import { useState } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatRoomPage } from "./pages/ChatRoomPage";

function App() {
  const [user, setUser] = useState(null);

  const storeUser = (user) => {
    setUser(user);
  }

  const clearUser = () => {
    setUser(null);
  }

  const isSignedIn = user !== null;

  return (
    <div>
      {isSignedIn && <ChatRoomPage onSignOut={clearUser} user={user} />}
      {!isSignedIn && <SignInPage onSignIn={storeUser} />}
    </div>
  );
}

export default App;
