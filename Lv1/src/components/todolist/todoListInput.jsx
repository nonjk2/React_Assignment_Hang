import React, { useCallback } from "react";
import { AddTodoButton } from "../../pages/todoList/style";
import TodoListInputElement from "./todoListInputElement";
import useInput from "../../hooks/useInput";

const TodoListInputs = ({ setTodos, todos }) => {
  // const { setTodos, todos } = props;
  const [label, handleLabelChange, setLabelDefalut] = useInput();
  const [description, handleDescriptionChange, setDesDefalut] = useInput();
  const formUpdateHandler = (e) => {
    e.preventDefault();
    if (label && description) {
      const newTodo = [...todos, { label, description, isDone: false }];
      setTodos(newTodo);
      setDesDefalut("");
      setLabelDefalut("");
      console.log(todos);
    }
  };

  return (
    <div className="todoInputContainer">
      <form onSubmit={formUpdateHandler}>
        <TodoListInputElement
          label="제목"
          id="name"
          value={label}
          onChange={handleLabelChange}
        />
        <TodoListInputElement
          label="내용"
          id="desc"
          value={description}
          onChange={handleDescriptionChange}
        />
        <AddTodoButton type="submit">+추가</AddTodoButton>
      </form>
    </div>
  );
};
export default React.memo(TodoListInputs);
