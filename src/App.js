import { useState, useEffect } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>

      <TodoList />

      <footer>
        &copy; prasun.net
      </footer>
    </div>
  );
}

export default App;
