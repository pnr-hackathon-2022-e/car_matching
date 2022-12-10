import { UserProvider } from "./contexts/UserContext";
import { Routes } from "./Routes";
import "./App.css";
import { FriendsProvider } from "./contexts/FriendsContext";

function App() {
  return (
    <UserProvider>
      <FriendsProvider>
        <Routes />
      </FriendsProvider>
    </UserProvider>
  );
}

export default App;
