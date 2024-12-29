import { createStore } from 'redux';
import { Reducer } from './Reducer';
import { APP } from '../config';

export const TodoStore = createStore(Reducer);
TodoStore.subscribe(() => {
  window.localStorage.setItem(APP.BROWSER_STORAGE_KEY, JSON.stringify(TodoStore.getState()));
});
