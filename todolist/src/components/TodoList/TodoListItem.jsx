import React from "react";

function TodoListItem({ todo, isComplete, onTodoToggle, onTodoRemove }) {
  const { id, title } = todo;

  return (
    <li>
      <input
        id={id}
        type="checkbox"
        checked={isComplete}
        onChange={(e) => {
          onTodoToggle(e, id);
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
