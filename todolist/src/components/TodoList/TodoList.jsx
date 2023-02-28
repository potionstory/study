import React from "react";
import TodoListHeader from "./TodoListHeader";
import TodoListBody from "./TodoListBody";
import TodoListFooter from "./TodoListFooter";
import { TodoListWrap } from "./style";

function TodoList() {
  return (
    <TodoListWrap>
      <TodoListHeader />
      <TodoListBody />
      <TodoListFooter />
    </TodoListWrap>
  );
}

export default TodoList;
