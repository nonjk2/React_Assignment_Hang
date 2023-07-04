import styled from "styled-components";
import Select from "../util/select";

const SelectContainer = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
  .selectsBox {
    position: relative;
    display: flex;
    gap: 10px;
  }
  .title {
    margin: 20px 0;
  }
`;

const SELECT_LIST_ONE = ["리액트", "자바", "스프링", "리액트네이티브"];
const SELECT_LIST_TWO = ["NEXTJS", "JPA", "NESTJS", "TYPESCRIPT", "REDIS"];

const SelectComponent = () => {
  return (
    <SelectContainer>
      <h1 className="title">Select</h1>
      <div className="selectsBox">
        <Select myList={SELECT_LIST_ONE} />
        <Select myList={SELECT_LIST_TWO} up={true} />
      </div>
    </SelectContainer>
  );
};
export default SelectComponent;
