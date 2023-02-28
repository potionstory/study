import React from "react";
import { useDispatch } from "react-redux";
import { todoToggle, todoRemove } from "../../store/todolistSlice";

function TodoListItem({ todo, isComplete }) {
  const { id, title } = todo;

  const dispatch = useDispatch();

  const onTodoToggle = (id) => {
    dispatch(todoToggle(id));
  };

  const onTodoRemove = (id) => {
    dispatch(todoRemove(id));
  };

  return (
    <li>
      <input
        id={id}
        type="checkbox"
        checked={isComplete}
        onChange={() => {
          onTodoToggle(id);
        }}
      />
      <label htmlFor={id}>{title}</label>
      <button type="button" onClick={() => onTodoRemove(id)}>
        삭제
      </button>
    </li>
  );
}

export default React.memo(TodoListItem);
