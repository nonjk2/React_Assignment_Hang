import styled from "styled-components";
import useSelect from "../hooks/useSelect";
import { FaAngleDown } from "react-icons/fa";
import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import useElementPosition from "../hooks/useElementPosition";
import useOutsideClick from "../hooks/useOutsideClick";
import SelectListItem from "../components/select/SelectList";

interface SelectContainerProp {
  zIndex?: number;
}

const SelectContainer = styled.div<SelectContainerProp>`
  position: relative;
  width: 300px;
  user-select: none;
`;

const MySelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;

  .downIcon {
    padding: 0;
    font-size: 30px;
  }
`;
interface SelectProps {
  myList: string[];
  up?: boolean;
}

const Select: React.FC<SelectProps> = (props) => {
  const { myList, up = false } = props;
  const [select, selectList, setSelect] = useSelect(myList);
  const [toggle, setToggle] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const portalTarget = document.getElementById("portalTarget"); // 전달보낼 div id
  const position = useElementPosition(ref, 10);

  /**ul클릭시 닫힘 */
  useOutsideClick(ref, (event) => {
    if (portalTarget && !portalTarget.contains(event.target as Node)) {
      setToggle(false);
    }
  });

  const onSelectListHandler = () => {
    setToggle(!toggle);
  };

  return (
    <SelectContainer ref={ref}>
      <MySelect onClick={onSelectListHandler}>
        <p>{select}</p>
        <FaAngleDown className="downIcon" />
      </MySelect>
      {/* hidden 태그는 랜더가 미리됨 */}

      {toggle &&
        (up && portalTarget ? (
          ReactDOM.createPortal(
            <SelectListItem
              onSelectListHandler={onSelectListHandler}
              position={position}
              selectList={selectList}
              setSelect={setSelect}
              up={up}
            />,
            portalTarget
          )
        ) : (
          <SelectListItem
            onSelectListHandler={onSelectListHandler}
            position={position}
            selectList={selectList}
            setSelect={setSelect}
            up={up}
          />
        ))}
    </SelectContainer>
  );
};
export default Select;
