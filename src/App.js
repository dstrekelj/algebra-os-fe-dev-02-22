import "./App.css";
import { useContext, useState } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatRoomPage } from "./pages/ChatRoomPage";
import { AppContext } from "./contexts/AppContext";

function App() {
  const {user, clearUser, storeUser} = useContext(AppContext);

  const isSignedIn = user !== null;

  return (
    <div>
      {isSignedIn && <ChatRoomPage onSignOut={clearUser} user={user} />}
      {!isSignedIn && <SignInPage onSignIn={storeUser} />}
    </div>
  );
}

export default App;
