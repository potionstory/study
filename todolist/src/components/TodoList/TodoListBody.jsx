import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { TodoListBodyWrap } from "./style";

function TodoListBody() {
  const { list } = useSelector((state) => state.todolist);

  return (
    <TodoListBodyWrap>
      {list.length !== 0 ? (
        <ul>
          {list.map((todo) => {
            const { id, isComplete } = todo;

            return (
              <TodoListItem key={id} todo={todo} isComplete={isComplete} />
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
