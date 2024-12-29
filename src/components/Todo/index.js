import { useState, useEffect } from 'react';
import { APP } from '../../config';

export function Todo() {
  const [todoList, setTodoList] = useState([]);
  
  useEffect(() => {
    const storageList = window.localStorage.getItem(APP.BROWSER_STORAGE_KEY);
    if(storageList) {
      const listObj = JSON.parse(storageList);
      if(listObj.length > 0) {
        setTodoList(listObj);
      }
    }
  }, []);

  const addTodo = (e) => {
    const updatedList = [{ text: e.target.todoInput.value, done: false }, ...todoList]
    setTodoList(updatedList);
    window.localStorage.setItem(APP.BROWSER_STORAGE_KEY, JSON.stringify(updatedList));
    document.getElementById('todoInput').value = '';
    e.preventDefault();
  }

  const markDone = (e) => {
    let updatedList = [...todoList];
    updatedList[e.target.dataset['index']]['done'] = e.target.checked;
    if(e.target.checked) {
      const checked = updatedList[e.target.dataset['index']];
      updatedList.splice(e.target.dataset['index'], 1);
      updatedList = [...updatedList, checked];
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
      <form className='addTodoForm' onSubmit={addTodo}>
        <input name='todoInput' id='todoInput' className='todoInput' />
        <button id='todoBtn' className='todoBtn'>Add</button>
      </form>
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
