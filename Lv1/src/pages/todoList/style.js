import styled from "styled-components";

export const TodoListContainer = styled.div`
  position: relative;
  width: 100%;
  .todoInputContainer {
    position: sticky;
    top: 0;
    z-index: 1;
    form {
      display: flex;
      align-items: center;
      padding: 30px 15px;
      background: #eee;
      border-radius: 10px;
    }
    .todoInputLable {
      display: flex;
      align-items: center;
      label {
        width: 50px;
        text-align: center;
      }
    }

    input {
      margin-right: 10px;
      margin-left: 10px;
      border: 1px none #000;
      background-color: transparent;
      display: block;
      width: 100%;
      height: 38px;
      padding: 8px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #333333;
      background-color: #ffffff;
    }
    .todoInputDescription {
      display: flex;
      align-items: center;
      label {
        width: 50px;
        text-align: center;
      }
      .todoInputDesForm {
        width: 300px;
      }
    }
  }
`;
export const AddTodoButton = styled.button`
  border: none;
  background: #5585e8;
  color: #eee;
  width: 100px;
  height: 40px;
  cursor: pointer;
`;
