import { Outlet } from "react-router-dom";
import NavbarTop from "../components/NavbarTop";
import NavbarTopNew from "../components/NavbarTopNew";
import styled from "styled-components";
import { deviceMax, deviceMin } from "../helpers/deviceWidth";

const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <LayoutStyle>
          <NavbarTopNew />
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        </LayoutStyle>
      </LayoutWrapper>
    </>
  );
};
const OutletWrapper = styled.div`
  padding: 20px 10px 0 10px;
`;
const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LayoutStyle = styled.div`
  background-color: ${(props) => props.theme.mcv.white};
  @media ${deviceMax.laptop} {
    width: 100vw;
  }

  @media ${deviceMin.laptop} {
    width: ${(props) => props.theme.mcv.full_width};
  }
`;

export default Layout;
