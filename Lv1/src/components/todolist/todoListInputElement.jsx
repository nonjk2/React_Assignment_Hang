const TodoListInputElement = ({ label, ...props }) => {
  const inputDescStyle = label === "내용" ? { width: "30rem" } : {};
  return (
    <div className="todoInputLable" style={{ ...inputDescStyle }}>
      <label htmlFor={props.id}>{label}</label>
      <input
        {...props}
        type="text"
        className="todoInputName"
        placeholder={`${label}을 입력하세요`}
      />
    </div>
  );
};
export default TodoListInputElement;
