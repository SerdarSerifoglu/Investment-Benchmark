import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { deviceMin, deviceMax } from "../helpers/deviceWidth";
import LogoSvg from "../images/Logo.svg";

const NavbarTopNew = () => {
  var isAdmin = false;
  return (
    <>
      <Navbar>
        <NavbarTop>
          <NavLinkStyled to="/main-page">
            <Logo src={LogoSvg}></Logo>
          </NavLinkStyled>
          <MenuLinks>
            {isAdmin ? (
              <>
                <MenuLink to="/admin/date">Admin-Tarih</MenuLink>
                <MenuLink to="/admin/csv">Admin-CSV</MenuLink>
                <MenuLink to="/admin/csv-load">Admin-CSVLoad</MenuLink>
              </>
            ) : (
              ""
            )}
            <MenuLink to="/investment-tools">Yatırım Araçları</MenuLink>
            <MenuLink to="/revenue-report">Gelir Raporu</MenuLink>
            <MenuLink to="/cumulative-report">Birikim Raporu</MenuLink>
          </MenuLinks>
        </NavbarTop>
        <NavbarBottom>
          <NavbarBottomTriangleLeft></NavbarBottomTriangleLeft>
          <NavbarBottomTriangleRight></NavbarBottomTriangleRight>
        </NavbarBottom>
      </Navbar>
    </>
  );
};

const Navbar = styled.div`
  position: sticky;
  top: 0;
`;

const NavbarTop = styled.div`
  width: ${(props) => props.theme.mcv.full_width};
  height: 75px;
  background-color: ${(props) => props.theme.mcv.purple};
  display: flex;
  flex-direction: row;
  width: ${(props) => props.theme.mcv.full_width};

  @media ${deviceMax.laptop} {
    width: 100vw;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  flex: 1;
  margin-left: 60px;
  width: 100%;
  max-width: 414px;
  height: auto;
  @media ${deviceMax.tablet} {
    margin-left: 15px;
    flex: 0.5;
  }
`;

const MenuLinks = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  margin-right: 44px;
  align-items: center;
  @media ${deviceMax.tablet} {
    flex: 3.5;
  }
`;

const MenuLink = styled(NavLink)`
  color: ${(props) => props.theme.mcv.white};
  margin: 0 16px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.mcv.orange};
    padding-bottom: 1px;
    border-radius: 1px;
  }

  &.active {
    border-bottom: 3px solid ${(props) => props.theme.mcv.orange};
    padding-bottom: 1px;

    border-radius: 1x;
  }

  @media ${deviceMax.tablet} {
    margin-right: 10px;
  }
`;

const NavbarBottom = styled.div`
  display: flex;
`;

const NavbarBottomTriangleLeft = styled.div`
  z-index: 1;
  position: relative;
  width: 0;
  height: 0;
  border-top: 40px solid ${(props) => props.theme.mcv.orange};
  border-right: ${(props) => props.theme.mcv.navbar_bottom_triangle_left_width}
    solid ${(props) => props.theme.mcv.mainpage_section_bc};
  &:before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: -42px;
    left: 0;
    border-top: 40px solid ${(props) => props.theme.mcv.purple};
    border-right: ${(props) =>
        props.theme.mcv.navbar_bottom_triangle_left_width}
      solid transparent;
  }
`;

const NavbarBottomTriangleRight = styled.div`
  z-index: 10;
  position: relative;
  width: 0;
  height: 0;
  border-top: 40px solid ${(props) => props.theme.mcv.orange};
  border-left: calc(
      ${(props) => props.theme.mcv.full_width} -
        ${(props) => props.theme.mcv.navbar_bottom_triangle_left_width}
    )
    solid ${(props) => props.theme.mcv.mainpage_section_bc};
  @media ${deviceMax.laptop} {
    border-left: calc(
        100vw - ${(props) => props.theme.mcv.navbar_bottom_triangle_left_width}
      )
      solid ${(props) => props.theme.mcv.mainpage_section_bc};
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
    top: -42px;
    right: 0;
    border-top: 40px solid ${(props) => props.theme.mcv.purple};
    border-left: calc(
        100vw - ${(props) => props.theme.mcv.navbar_bottom_triangle_left_width}
      )
      solid transparent;
    @media ${deviceMax.laptop} {
      border-left: calc(
          100vw -
            ${(props) => props.theme.mcv.navbar_bottom_triangle_left_width}
        )
        solid transparent;
    }
    @media ${deviceMin.laptop} {
      border-left: calc(
          ${(props) => props.theme.mcv.full_width} -
            ${(props) => props.theme.mcv.navbar_bottom_triangle_left_width}
        )
        solid transparent;
    }
  }
`;

export default NavbarTopNew;
