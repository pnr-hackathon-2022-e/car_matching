import { createContext, useEffect, useState } from "react";

export const userContext = createContext();
export const setUserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    if (!!user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <userContext.Provider value={user}>
      <setUserContext.Provider value={setUser}>
        {children}
      </setUserContext.Provider>
    </userContext.Provider>
  );
};
