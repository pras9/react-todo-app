import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    toggleTodo: (state, action) => {
      const toggled = state.todos[action.payload.index];
      toggled['done'] = action.payload.checked;
      state.todos.splice(action.payload.index, 1);
      if (action.payload.checked) {
        state.todos.push(toggled);
      } else {
        state.todos.unshift(toggled);
      }
    },
    deleteTodoList: (state) => {
      state.todos = [];
    }
  }
});

export const { addTodo, deleteTodo, toggleTodo, deleteTodoList } = todoSlice.actions;

export const selectTodo = (state) => state.todos;

export default todoSlice.reducer;
