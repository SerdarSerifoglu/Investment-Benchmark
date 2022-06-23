import { NavLink } from "react-router-dom";
const NavbarTop = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/main-page">Ana Sayfa</NavLink> | 
        <NavLink to="/cumulative-report">Birikimli Yatırım</NavLink>
      </div>
    </>
  );
};

export default NavbarTop;
