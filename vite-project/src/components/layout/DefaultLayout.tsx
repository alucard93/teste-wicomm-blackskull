// estilização
import { LayoutContainer } from "./style";

// componente
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

// lib
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};
