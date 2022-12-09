import { css } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Matching } from "./pages/Matching";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/matching"} element={<Matching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
