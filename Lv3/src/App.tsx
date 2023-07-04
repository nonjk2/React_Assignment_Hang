import { useState } from "react";
import GlobalStyle from "./style/globalStyle";
import { Modal } from "./util/modal";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";
import ModalComponent from "./components/ModalComponent";
import SelectComponent from "./components/SelectComponent";
import FirstModal from "./components/modal/FirstModal";
import SecondModal from "./components/modal/SecondModal";

function App() {
  const [toggleFirstModal, setToggleFirstModal] = useState<boolean>(false);
  const [toggleSecondModal, setToggleSecondModal] = useState<boolean>(false);

  const onClickToggleModal = (type: "first" | "second") => {
    switch (type) {
      case "first":
        setToggleFirstModal(!toggleFirstModal);
        return;
      case "second":
        setToggleSecondModal(!toggleSecondModal);
        return;
      default:
        return;
    }
  };

  return (
    <>
      <GlobalStyle />
      <ButtonComponent />
      <InputComponent />
      <ModalComponent setToggle={onClickToggleModal} />
      <SelectComponent />
      <div id="portalTarget"></div>
      {toggleFirstModal && (
        <Modal
          element={<FirstModal setModal={setToggleFirstModal} />}
          modal={toggleFirstModal}
          width="500"
          height="400"
          setModal={setToggleFirstModal}
          type="twobutton"
        />
      )}
      {toggleSecondModal && (
        <Modal
          element={<SecondModal setModal={setToggleSecondModal} />}
          modal={toggleSecondModal}
          height="300"
          width="300"
          setModal={setToggleSecondModal}
          type="default"
        />
      )}
    </>
  );
}

export default App;
