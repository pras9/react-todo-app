import { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../../store';
import { APP } from '../../config';

export function Todo() {
  const {todoList, setTodoList} = useContext(TodoContext);

  const addTodo = (e) => {
    const updatedList = [{ text: e.target.todoInput.value, done: false }, ...todoList]
    setTodoList(updatedList);
    window.localStorage.setItem(APP.BROWSER_STORAGE_KEY, JSON.stringify(updatedList));
    document.getElementById('todoInput').value = '';
    e.preventDefault();
  }

  return (
    <form className='addTodoForm' onSubmit={addTodo}>
      <input name='todoInput' id='todoInput' className='todoInput' />
      <button id='todoBtn' className='todoBtn'>Add</button>
    </form>
  );
}
