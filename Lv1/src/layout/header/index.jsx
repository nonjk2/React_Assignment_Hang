import styled from "styled-components";

const HeaderContainer = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>My Todo List</div>
      <div>React</div>
    </HeaderContainer>
  );
};
export default Header;
