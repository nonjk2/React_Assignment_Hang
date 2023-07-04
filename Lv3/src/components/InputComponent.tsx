import styled from "styled-components";
import Input from "../util/input";
import useInput from "../hooks/useInput";
import { FormEvent } from "react";
import Button from "../util/button";

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  .inputbox {
    display: flex;
    gap: 30px;
    align-items: center;
  }
`;

const InputComponent = () => {
  const { value: FirstValue, onChange: FirstOnChange } = useInput();
  const { value: SecondValue, onChange: SecondOnChange } = useInput("price");
  const InputSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = { name: FirstValue, price: SecondValue };
    alert(JSON.stringify(data));
  };
  return (
    <InputContainer>
      <h1 className="title">Input</h1>
      <form action="" className="inputbox" onSubmit={InputSubmit}>
        <div className="firstInputBox">
          <label>이름</label>
          <Input onChange={FirstOnChange} value={FirstValue} />
        </div>
        <div className="secondInputBox">
          <label>가격</label>
          <Input onChange={SecondOnChange} value={SecondValue} type="price" />
        </div>
        <Button color="green" size="small" title={<>저장</>} type="submit" />
      </form>
    </InputContainer>
  );
};
export default InputComponent;
