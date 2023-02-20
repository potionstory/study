import React, { useCallback } from "react";
import { TodoListFooterWrap, TodoListFooterButton } from "./style";
import { useRef, useEffect } from "react";

function TodoListFooter({ title, onTitleChange, onTodoAdd }) {
  const inputRef = useRef(null);

  const onEnterKeyUp = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onTodoAdd();
      }
    },
    [onTodoAdd]
  );

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <TodoListFooterWrap>
      <input
        type="text"
        ref={inputRef}
        placeholder="새로운 할일을 입력해주세요."
        value={title}
        onChange={onTitleChange}
        onKeyUp={onEnterKeyUp}
      />
      <TodoListFooterButton isActive={title.length !== 0} onClick={onTodoAdd}>
        추가
      </TodoListFooterButton>
    </TodoListFooterWrap>
  );
}

export default React.memo(TodoListFooter);
