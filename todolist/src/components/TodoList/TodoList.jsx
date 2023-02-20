import React, { useCallback } from "react";
import { TodoListWrap } from "./style";
import TodoListBody from "./TodoListBody";
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import { useState, useRef } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const todoId = useRef(0);

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

  const onTodoToggle = useCallback((e, id) => {
    console.log("onTodoToggle: ", id, e.target.checked);
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

  const onTodoRemove = useCallback((id) => {
    setTodos((prevState) => {
      const newTodos = prevState.filter((todo) => todo.id !== id);

      return newTodos;
    });
  }, []);

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
