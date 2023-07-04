import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";

const MainContainer = styled.main`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Layout = () => {
  return (
    <div>
      <MainContainer>
        <Header />
        <Outlet />
      </MainContainer>
    </div>
  );
};
export default Layout;
