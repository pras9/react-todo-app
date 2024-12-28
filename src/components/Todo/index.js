import { useState, useEffect } from "react";

export function Todo() {
  const [todoList, setTodoList] = useState([]);
  
  useEffect(() => {
    if(window.localStorage.todoList) {
      const storageList = JSON.parse(window.localStorage.todoList);
      if(storageList.length > 0) {
        setTodoList(storageList);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.todoList = JSON.stringify(todoList);
  }, todoList);

  const addTodo = (e) => {
    console.log(e.target.todoInput.value);
    setTodoList([{ text: e.target.todoInput.value, done: false }, ...todoList]);
    document.getElementById('todoInput').value = '';
    e.preventDefault();
  }

  const markDone = (e) => {
    console.log(e.target.todoInput.value);
    setTodoList([{ text: e.target.todoInput.value, done: false }, ...todoList]);
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input name='todoInput' id='todoInput' />
        <button id='addTodo'>Add</button>
      </form>
      <div>
        <ul>
          {todoList && todoList.length > 0 && todoList.map((todo, i) => (
            <li>
              <input type='checkbox' checked={todo?.done} data-id={i} onClick={markDone} /> {todo?.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
