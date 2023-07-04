import TodoItemCard from "./todoItemCard";

const TodoWorkDoneContainer = (props) => {
  const { list, setTodos, containerLabel } = props;
  return (
    <>
      <h1>{containerLabel}</h1>
      <div className="workingContainer">
        {list.length ? (
          list.map((isdone, index) => (
            <TodoItemCard
              todo={isdone}
              key={isdone.label + index}
              setTodos={setTodos}
              index={index}
            />
          ))
        ) : (
          <div className="empty-container"> 비어있습니다 ~</div>
        )}
      </div>
    </>
  );
};
export default TodoWorkDoneContainer;
