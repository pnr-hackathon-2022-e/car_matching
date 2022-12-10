import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom";
import { Friends } from "./pages/Friends";
import { Home } from "./pages/Home";
import { Matching } from "./pages/Matching";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route index element={<Home />} />
        <Route path={"/matching"} element={<Matching />} />
        <Route path={"/friends"} element={<Friends />} />
      </RoutesDom>
    </BrowserRouter>
  );
};
