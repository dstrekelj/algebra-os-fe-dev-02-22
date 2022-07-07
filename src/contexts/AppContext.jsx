import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
  const [user, setUser] = useState(null);

  const storeUser = (user) => {
    setUser(user);
  }

  const clearUser = () => {
    setUser(null);
  }

  const value = {
    user,
    storeUser,
    clearUser,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
