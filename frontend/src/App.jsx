import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Matching } from "./pages/Matching";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/matching"} element={<Matching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
