import React from "react";
import TodoListItem from "./TodoListItem";
import { TodoListBodyWrap } from "./style";

function TodoListBody({ todos, onTodoToggle, onTodoRemove }) {
  console.log(todos);
  return (
    <TodoListBodyWrap>
      {todos.length !== 0 ? (
        <ul>
          {todos.map((todo) => {
            const { id, isComplete } = todo;

            return (
              <TodoListItem
                key={id}
                todo={todo}
                isComplete={isComplete}
                onTodoToggle={onTodoToggle}
                onTodoRemove={onTodoRemove}
              />
            );
          })}
        </ul>
      ) : (
        <p className="empty">현재 등록된 할일이 없습니다.</p>
      )}
    </TodoListBodyWrap>
  );
}

export default React.memo(TodoListBody);
