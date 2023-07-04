import styled from "styled-components";
import TodoItemCard from "./todoItemCard";
import { TodoWorkinContainer } from "../../styles/todoList";
import TodoWorkDoneContainer from "./todoWorkDoneContainer";

const TodoListBody = (props) => {
  const { todos, setTodos } = props;
  const todosWorkingList = todos.filter((e) => !e.isDone);
  const todosIsDoneList = todos.filter((e) => e.isDone);
  return (
    <TodoWorkinContainer>
      <div>
        {/* working */}
        <TodoWorkDoneContainer
          list={todosWorkingList}
          setTodos={setTodos}
          containerLabel={"Working"}
        />
        {/* done */}
        <TodoWorkDoneContainer
          list={todosIsDoneList}
          setTodos={setTodos}
          containerLabel={"Done"}
        />
      </div>
    </TodoWorkinContainer>
  );
};
export default TodoListBody;
