import styled from "styled-components";

import useInput from "../hooks/useInput";
import Input from "../util/input";
import { useNavigate } from "react-router-dom";
import DogsWelcome from "../components/DogsWelcome";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { userSet } from "../store/slice/userSlice";
import { fetchMyDog } from "../store/slice/dogsSlice";

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
  form {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;
const Welcome = () => {
  const [nickNameValue, onChangeNickName] = useInput();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmitHandler = () => {
    navigation("/main");
    dispatch(userSet({ id: nickNameValue, nickname: nickNameValue }));
    // localstorage
  };

  return (
    <WelcomeContainer>
      <DogsWelcome />
      <form action="" className="nicknameInput" onSubmit={onSubmitHandler}>
        <label className="nickname">닉네임</label>
        <Input onChange={onChangeNickName} value={nickNameValue} placeholder="닉네임을써주세요" />
      </form>
    </WelcomeContainer>
  );
};
export default Welcome;
