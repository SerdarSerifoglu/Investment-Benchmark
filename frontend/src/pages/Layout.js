import { Outlet } from "react-router-dom";
import NavbarTop from "../components/NavbarTop";

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
