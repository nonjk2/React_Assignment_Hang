import styled from "styled-components";
import Button from "../util/button";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .positiveButtonBox {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .negativeButtonBox {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

const ButtonComponent = () => {
  return (
    <ButtonContainer>
      <h1>Button</h1>
      <div className="positiveButtonBox">
        <Button
          color={"green"}
          size={"large"}
          //title안에 폰트 추가할수있음
          title={<>Large Primary Button </>}
          onClick={() => {
            alert("버튼을 만들어보세요");
          }}
        />
        <Button color={"green"} size={"medium"} title={<>Medium</>} />
        <Button color={"green"} size={"small"} title={<>Small</>} />
      </div>

      <div className="negativeButtonBox">
        <Button
          color={"red"}
          size={"large"}
          //title안에 폰트 추가할수있음
          title={<>Large Negative Button 🔔</>}
          onClick={() => {
            let a = prompt("아아아아아ㅏ", "");
            console.log(a);
          }}
        />
        <Button color={"red"} size={"medium"} title={<>Medium</>} />
        <Button color={"red"} size={"small"} title={<>Small</>} />
      </div>
    </ButtonContainer>
  );
};
export default ButtonComponent;
