import { DefaultLayout } from "../components/layout/DefaultLayout";
import { Route, Routes } from 'react-router-dom'
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
