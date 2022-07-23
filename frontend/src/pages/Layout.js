import { Outlet, useNavigate } from "react-router-dom";
import NavbarTop from "../components/NavbarTop";
import NavbarTopNew from "../components/NavbarTopNew";
import styled from "styled-components";
import { deviceMax, deviceMin } from "../helpers/deviceWidth";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/main-page");
  }, []);
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
  max-width: ${(props) => props.theme.mcv.full_width};
  @media ${deviceMax.laptop} {
    max-width: 100vh;
  }
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
