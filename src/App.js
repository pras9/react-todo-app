import { useState, useEffect } from 'react';
import './App.css';
import { TodoContext } from './store';
import { TodoList } from './components/TodoList';
import { APP } from './config';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const storageList = window.localStorage.getItem(APP.BROWSER_STORAGE_KEY);
    if (storageList) {
      const listObj = JSON.parse(storageList);
      if (listObj.length > 0) {
        setTodoList(listObj);
      }
    }
  }, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ todoList, setTodoList }}>
        <header>
          <h1>Todo App</h1>
        </header>

        <TodoList />

        <footer>
          &copy; prasun.net
        </footer>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
