import "./App.css";
import Button from "./components/Button";
import { User } from "./components/User";
import { useState } from "react";
import { SignInPage } from "./pages/SignInPage";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSignIn = (user) => {
    setUser(user);
  }

  const signOut = () => {
    setUser(null);
    setError(null);
  }

  const isSignedIn = user !== null;

  return (
    <div>
      {isSignedIn && <Button type="button" onClick={signOut}>Sign out</Button>}
      {isSignedIn && <User src="/avatar.svg" username={user.username} />}
      {!isSignedIn && <SignInPage onSignIn={handleSignIn} />}
    </div>
  );
}

export default App;
