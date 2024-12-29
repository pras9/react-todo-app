import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>

      <Todo />

      <footer>
        &copy; prasun.net
      </footer>
    </div>
  );
}

export default App;
