import React, { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../../store/todolistSlice";
import { TodoListFooterWrap, TodoListFooterButton } from "./style";

function TodoListFooter() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [title, setTitle] = useState("");

  // title change
  const onTitleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onTodoAdd = useCallback(() => {
    dispatch(todoAdd(title));
    setTitle("");
  }, [dispatch, title]);

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
      <TodoListFooterButton onClick={onTodoAdd}>추가</TodoListFooterButton>
    </TodoListFooterWrap>
  );
}

export default React.memo(TodoListFooter);
