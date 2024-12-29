import { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../../store';
import { APP } from '../../config';
import { Todo } from '../Todo';

export function TodoList() {
  const {todoList, setTodoList} = useContext(TodoContext);

  const markDone = (e) => {
    let updatedList = [...todoList];
    updatedList[e.target.dataset['index']]['done'] = e.target.checked;
    if (e.target.checked) {
      const checked = updatedList[e.target.dataset['index']];
      updatedList.splice(e.target.dataset['index'], 1);
      updatedList = [...updatedList, checked];
    } else {
      const unchecked = updatedList[e.target.dataset['index']];
      updatedList.splice(e.target.dataset['index'], 1);
      updatedList = [unchecked, ...updatedList];
    }
    setTodoList(updatedList);
    window.localStorage.setItem(APP.BROWSER_STORAGE_KEY, JSON.stringify(updatedList));
  }

  const deleteTodo = (e) => {
    const updatedList = [...todoList];
    updatedList.splice(e.target.dataset['index'], 1);
    setTodoList(updatedList);
    window.localStorage.setItem(APP.BROWSER_STORAGE_KEY, JSON.stringify(updatedList));
  }

  const deleteTodoList = () => {
    setTodoList([]);
    window.localStorage.setItem(APP.BROWSER_STORAGE_KEY, JSON.stringify([]));
  }

  return (
    <div className='appContainer'>
      <Todo />
      <div className='todoListContainer'>
        <ul className='todoList'>
          {todoList && todoList.length > 0 && todoList.map((todo, i) => (
            <li key={i} className='listItem'>
              <div className='itemCheckboxContainer'>
                <input type='checkbox' checked={todo?.done} data-index={i} onChange={markDone} />
              </div>
              <div className={`itemText ${todo?.done ? 'done' : ''}`}>{todo?.text}</div>
              <div className='itemActionsContainer'>
                <button className='deleteItem' onClick={deleteTodo} data-index={i}>X</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className='deleteAll' onClick={deleteTodoList}>Delete All</button>
    </div>
  );
}
