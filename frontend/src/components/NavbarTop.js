import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const NavbarTop = () => {
  var isAdmin = false;
  return (
    <>
      <div className="navbar">
        {isAdmin ? (
          <>
            <NavLinkStyled to="/admin/date">Admin-Tarih</NavLinkStyled>
            <NavLinkStyled to="/admin/csv">Admin-CSV</NavLinkStyled>{" "}
            <NavLinkStyled to="/admin/csv-load">Admin-CSVLoad</NavLinkStyled>
          </>
        ) : (
          ""
        )}

        <NavLinkStyled to="/main-page">Ana Sayfa</NavLinkStyled>
        <NavLinkStyled to="/investment-tools">Yatırım Araçları</NavLinkStyled>
        <NavLinkStyled to="/revenue-report">Gelir Raporu</NavLinkStyled>
        <NavLinkStyled to="/cumulative-report">Birikimli Rapor</NavLinkStyled>
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
