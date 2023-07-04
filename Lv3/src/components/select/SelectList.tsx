import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface StyledListContainerProps {
  top: number;
  left: number;
}
const StyledListContainer = styled.ul<StyledListContainerProps>`
  position: absolute;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 12px;
  z-index: 500;
  width: 300px;
  background-color: rgb(255, 255, 255);

  top: ${(props) => (props.top !== 0 ? props.top : 30)}px;
  left: ${(props) => props.left}px;

  li {
    font-size: 12px;
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 15px;

    &:hover {
      background-color: rgb(238, 238, 238);
    }

    &:first-child {
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
    }

    &:last-child {
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
    }
  }
`;

interface SelectListProp {
  position: {
    top: number;
    left: number;
  };
  up: boolean;
  selectList: string[];
  setSelect: Dispatch<SetStateAction<string>>;
  onSelectListHandler: () => void;
}
const SelectListItem: React.FC<SelectListProp> = (props) => {
  const { position, up, selectList, setSelect, onSelectListHandler } = props;
  return (
    <StyledListContainer top={up ? position.top : 50} left={up ? position.left : 0}>
      {selectList.length &&
        selectList.map((value) => (
          <li
            key={value}
            onClick={() => {
              setSelect(value);
              onSelectListHandler();
            }}
          >
            {value}
          </li>
        ))}
    </StyledListContainer>
  );
};
export default SelectListItem;
