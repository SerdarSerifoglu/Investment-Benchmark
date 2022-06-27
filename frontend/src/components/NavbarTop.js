import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const NavbarTop = () => {
  return (
    <>
      <div className="navbar">
        <NavLinkStyled to="/admin/date">Admin-Tarih</NavLinkStyled>
        <NavLinkStyled to="/main-page">Ana Sayfa</NavLinkStyled>
        <NavLinkStyled to="/cumulative-report">Birikimli Yatırım</NavLinkStyled>
      </div>
    </>
  );
};
const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    font-weight: bold;
    color: coral;
  }

  &.active {
    font-weight: bold;
    color: orange;
  }
`;
export default NavbarTop;
