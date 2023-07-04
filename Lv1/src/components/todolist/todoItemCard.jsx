import { useCallback } from "react";

const TodoItemCard = (props) => {
  const { todo, setTodos } = props;
  const handleDelete = useCallback(() => {
    setTodos((prev) => prev.filter((e) => e !== todo));
  }, [setTodos, todo]);

  const handleDone = useCallback(() => {
    setTodos((prev) => {
      const newTodos = prev.map((item) => {
        if (item === todo) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
      return newTodos;
    });
  }, [setTodos, todo]);

  return (
    <div className="todoCardContainer">
      <div className="todoPaddingDiv">
        <div className="todoWorkingDiv ">
          <button className="todoDelBtn" onClick={handleDelete}>
            X
          </button>
          <div className="todoName">{todo.label}</div>

          <button className="todoIsdoneBtn" onClick={handleDone}>
            {todo.isDone ? "취소" : "확인"}
          </button>
        </div>

        <div className="todoDesc">{todo.description}</div>
      </div>
    </div>
  );
};
export default TodoItemCard;
