import styled from "styled-components";
import Button from "../../util/button";
import { Dispatch, SetStateAction } from "react";

const FirstModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  justify-content: space-between;
  flex-direction: column;
  .buttonsContainer {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
`;

export interface ModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
}

const FirstModal: React.FC<ModalProps> = (props) => {
  const { setModal } = props;
  return (
    <FirstModalContainer>
      <div className="textArea">
        닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
      </div>
      <div className="buttonsContainer">
        <Button
          color="red"
          size="small"
          title={<>닫기</>}
          onClick={() => {
            setModal(false);
          }}
        />
        <Button
          color="green"
          size="small"
          title={<>확인</>}
          onClick={() => {
            console.log("on!");
          }}
        />
      </div>
    </FirstModalContainer>
  );
};
export default FirstModal;
