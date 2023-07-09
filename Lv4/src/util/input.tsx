import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface MyInputProps {
  InputSize?: "large" | "medium" | "small";
}

const MyInput = styled.input<MyInputProps>`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: ${(prop) => (prop.InputSize === "large" ? "500" : "200")}px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  &:focus {
    outline: auto;
  }
`;
interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  InputSize?: "large" | "medium" | "small";
  value: string;
  type?: "default" | "price";
  placeholder?: string;
  id?: string;
}
const Input: React.FC<InputProps> = (props) => {
  const { id, onChange, InputSize = "medium", value, type = "default", placeholder } = props;
  return (
    <>
      <MyInput
        id={id}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        InputSize={InputSize}
        value={type === "default" ? value : value || "0"}
      />
    </>
  );
};
export default Input;
