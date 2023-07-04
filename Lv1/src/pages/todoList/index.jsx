import { useCallback, useEffect, useState } from "react";
import TodoListInput from "../../components/todolist/todoListInput";
import { TodoListContainer } from "./style";
import TodoListBody from "../../components/todolist/todoListBody";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <TodoListContainer>
      <TodoListInput setTodos={setTodos} todos={todos} />
      <TodoListBody todos={todos} setTodos={setTodos} />
    </TodoListContainer>
  );
};
export default TodoList;
