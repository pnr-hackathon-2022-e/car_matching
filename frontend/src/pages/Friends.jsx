import { useEffect, useState } from "react";

export const Friends = () => {
  const [friends, setFriends] = useState();

  useEffect(() => {
    setFriends(JSON.parse(localStorage.getItem("friends")));
  }, []);

  return (
    <>
      Friend
      {friends?.map((friend) => (
        <>
          {friend?.name}|{friend?.sns?.twitter}
        </>
      ))}
    </>
  );
};
