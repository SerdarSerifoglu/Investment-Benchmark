import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const NavbarTop = () => {
  return (
    <>
      <div className="navbar">
        <NavLinkStyled to="/main-page">Ana Sayfa</NavLinkStyled> | 
        <NavLinkStyled to="/cumulative-report">Birikimli Yatırım</NavLinkStyled>
      </div>
    </>
  );
};
const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;

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
