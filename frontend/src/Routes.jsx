import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom";
import { Home } from "./pages/Home";
import { Matching } from "./pages/Matching";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route index element={<Home />} />
        <Route path={"/matching"} element={<Matching />} />
      </RoutesDom>
    </BrowserRouter>
  );
};
