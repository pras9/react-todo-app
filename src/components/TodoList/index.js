import { TodoStore, toggleTodoAction, deleteTodoAction, deleteTodoListAction } from '../../store';
import { Todo } from '../Todo';

export function TodoList() {

  const toggleTodo = (e) => {
    TodoStore.dispatch(toggleTodoAction({index: e.target.dataset['index'], checked: e.target.checked}));
  }

  const deleteTodo = (e) => {
    TodoStore.dispatch(deleteTodoAction(e.target.dataset['index']));
  }

  const deleteTodoList = () => {
    TodoStore.dispatch(deleteTodoListAction());
  }

  return (
    <div className='appContainer'>
      <Todo />
      <div className='todoListContainer'>
        <ul className='todoList'>
          {TodoStore.getState().map((todo, i) => (
            <li key={i} className='listItem'>
              <div className='itemCheckboxContainer'>
                <input type='checkbox' checked={todo?.done} data-index={i} onChange={toggleTodo} />
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
