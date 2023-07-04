import styled from "styled-components";
import Button from "../util/button";

const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  .modalButtons {
    display: flex;
    gap: 10px;
  }
`;

interface ModalComponentProps {
  setToggle: (type: "first" | "second") => void;
}

const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const { setToggle } = props;
  return (
    <ModalContainer>
      <h1 className="title">Modal</h1>
      <div className="modalButtons">
        <Button
          color="green"
          size="small"
          title={<>open modal</>}
          onClick={() => {
            setToggle("first");
          }}
        />
        <Button
          color="red"
          size="large"
          title={<>open modal</>}
          onClick={() => {
            setToggle("second");
          }}
        />
      </div>
    </ModalContainer>
  );
};
export default ModalComponent;
