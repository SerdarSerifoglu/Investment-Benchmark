import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      Nav Bar
      <hr />
      <Outlet />
    </>
  );
};

export default MainPage;
