import { UserProvider } from "./contexts/UserContext";
import { Routes } from "./Routes";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
