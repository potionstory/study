import React, { useRef, useCallback, useEffect } from "react";
import { TodoListFooterWrap, TodoListFooterButton } from "./style";

function TodoListFooter({ title, onTitleChange, onTodoAdd }) {
  const inputRef = useRef(null);

  // enter key event
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
