import React, { useState, useRef, useCallback } from "react";
import TodoListHeader from "./TodoListHeader";
import TodoListBody from "./TodoListBody";
import TodoListFooter from "./TodoListFooter";
import { TodoListWrap } from "./style";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const todoId = useRef(0);

  // todo 추가
  const onTodoAdd = useCallback(() => {
    if (todos.filter((todo) => todo.title === title).length === 1) {
      alert("이미 존재하는 할일입니다.");
      setTitle("");

      return false;
    }

    if (title !== "") {
      const todo = {
        id: todoId.current,
        title,
        isComplete: false,
      };

      setTodos((prevState) => [...prevState, todo]);
      setTitle("");
      todoId.current = todoId.current + 1;
    }
  }, [title, todos]);

  // todo 토글
  const onTodoToggle = useCallback((e, id) => {
    setTodos((prevState) => {
      const newTodos = prevState.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = e.target.checked;
        }
        return todo;
      });

      return newTodos;
    });
  }, []);

  // todo 삭제
  const onTodoRemove = useCallback((id) => {
    setTodos((prevState) => {
      const newTodos = prevState.filter((todo) => todo.id !== id);

      return newTodos;
    });
  }, []);

  // title change
  const onTitleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  return (
    <TodoListWrap>
      <TodoListHeader todos={todos} />
      <TodoListBody
        todos={todos}
        onTodoToggle={onTodoToggle}
        onTodoRemove={onTodoRemove}
      />
      <TodoListFooter
        title={title}
        onTitleChange={onTitleChange}
        onTodoAdd={onTodoAdd}
      />
    </TodoListWrap>
  );
}

export default TodoList;
