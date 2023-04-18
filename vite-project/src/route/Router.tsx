// componentes
import { DefaultLayout } from "../components/layout/DefaultLayout";

// libs
import { Route, Routes } from "react-router-dom";

// page

import { Home } from "../pages/Home/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
