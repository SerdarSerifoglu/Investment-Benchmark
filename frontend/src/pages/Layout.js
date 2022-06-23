import { Outlet } from "react-router-dom";
import NavbarTop from "../components/NavbarTop";
import MainPage from "./MainPage";

const Layout = () => {
  return (
    <>
      <NavbarTop />
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
