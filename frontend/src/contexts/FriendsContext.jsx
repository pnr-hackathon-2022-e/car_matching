import { createContext, useEffect, useState } from "react";

export const friendsContext = createContext();
export const setFriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(JSON.parse(localStorage.getItem("friends")) ?? []);
  }, []);

  useEffect(() => {
    console.log(friends);
    if (Array.isArray(friends) && friends.length > 0) {
      localStorage.setItem("friends", JSON.stringify(friends));
    }
  }, [friends]);

  return (
    <friendsContext.Provider value={friends}>
      <setFriendsContext.Provider value={setFriends}>
        {children}
      </setFriendsContext.Provider>
    </friendsContext.Provider>
  );
};
