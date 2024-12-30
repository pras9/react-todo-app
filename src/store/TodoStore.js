import { configureStore } from '@reduxjs/toolkit';
import reducer from './TodoReducer';
import { APP } from '../config';

const storageList = window.localStorage.getItem(APP.BROWSER_STORAGE_KEY);
const preloadedState = storageList ? { todos: JSON.parse(storageList) } : { todos: [] };

export const TodoStore = configureStore({
  reducer,
  preloadedState
});
TodoStore.subscribe(() => {
  window.localStorage.setItem(APP.BROWSER_STORAGE_KEY, JSON.stringify(TodoStore.getState()['todos']));
});
