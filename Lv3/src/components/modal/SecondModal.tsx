import styled from "styled-components";
import Button from "../../util/button";
import { ModalProps } from "./FirstModal";

const SecondModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  justify-content: space-between;
  flex-direction: column;
  .buttonsContainer {
    display: flex;
    justify-content: flex-end;
  }
  .textArea {
    white-space: pre-line;
  }
`;

const SecondModal: React.FC<ModalProps> = (props) => {
  const { setModal } = props;
  return (
    <SecondModalContainer>
      <div className="textArea">닫기와 확인 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</div>
      <div className="buttonsContainer">
        <Button
          color="red"
          size="small"
          title={<>닫기</>}
          onClick={() => {
            setModal(false);
          }}
        />
      </div>
    </SecondModalContainer>
  );
};
export default SecondModal;
