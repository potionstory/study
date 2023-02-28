import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  list: [],
};

export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    todoAdd: (state, action) => {
      const title = action.payload;

      if (state.list.filter((todo) => todo.title === title).length === 1) {
        alert("이미 존재하는 할일입니다.");

        return;
      }

      if (title !== "") {
        const todo = {
          id: state.id,
          title,
          isComplete: false,
        };

        state.list.push(todo);
        state.id += 1;
      }
    },
    todoToggle: (state, action) => {
      const id = action.payload;
      const idx = state.list.findIndex((todo) => todo.id === id);

      state.list[idx].isComplete = !state.list[idx].isComplete;
    },
    todoRemove: (state, action) => {
      const id = action.payload;
      const idx = state.list.findIndex((todo) => todo.id === id);

      if (idx !== -1) state.list.splice(idx, 1);
    },
  },
});

export const { todoAdd, todoToggle, todoRemove } = todolistSlice.actions;

export default todolistSlice.reducer;
