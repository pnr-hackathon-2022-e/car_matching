import { Container } from "@mui/material";
import { UserProvider } from "./contexts/UserContext";
import { Routes } from "./Routes";

function App() {
  return (
    <UserProvider>
      <Container maxWidth="xs">
        <Routes />
      </Container>
    </UserProvider>
  );
}

export default App;
