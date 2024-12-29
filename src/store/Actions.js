import { ACTION_CONSTANTS } from '../config';

const { ADD_TODO, DELETE_TODO, TOGGLE_TODO, DELETE_TODO_LIST } = ACTION_CONSTANTS;

export function addTodoAction(payload) {
  return {
    type: ADD_TODO,
    payload
  };
}
export function deleteTodoAction(payload) {
  return {
    type: DELETE_TODO,
    payload
  };
}
export function toggleTodoAction(payload) {
  return {
    type: TOGGLE_TODO,
    payload
  };
}
export function deleteTodoListAction(payload) {
  return {
    type: DELETE_TODO_LIST,
    payload
  };
}
