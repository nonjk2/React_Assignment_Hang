import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface MyInputProps {
  InputSize?: "large" | "medium" | "small";
}

const MyInput = styled.input<MyInputProps>`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;
interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  InputSize?: "large" | "medium" | "small";
  value: string;
  type?: "default" | "price";
}
const Input: React.FC<InputProps> = (props) => {
  const { onChange, InputSize = "medium", value, type = "default" } = props;
  return (
    <>
      <MyInput
        onChange={onChange}
        InputSize={InputSize}
        value={type === "default" ? value : value || "0"}
      />
    </>
  );
};
export default Input;
