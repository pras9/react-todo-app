import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo, deleteTodoList, selectTodo } from '../../store';
import { Todo } from '../Todo';

export function TodoList() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();

  const onToggleTodo = (e) => {
    dispatch(toggleTodo({index: e.target.dataset['index'], checked: e.target.checked}));
  }

  const onDeleteTodo = (e) => {
    dispatch(deleteTodo(e.target.dataset['index']));
  }

  const onDeleteTodoList = () => {
    dispatch(deleteTodoList());
  }

  return (
    <div className='appContainer'>
      <Todo />
      <div className='todoListContainer'>
        <ul className='todoList'>
          {todos && todos.map((todo, i) => (
            <li key={i} className='listItem'>
              <div className='itemCheckboxContainer'>
                <input type='checkbox' checked={todo?.done} data-index={i} onChange={onToggleTodo} />
              </div>
              <div className={`itemText ${todo?.done ? 'done' : ''}`}>{todo?.text}</div>
              <div className='itemActionsContainer'>
                <button className='deleteItem' onClick={onDeleteTodo} data-index={i}>X</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className='deleteAll' onClick={onDeleteTodoList}>Delete All</button>
    </div>
  );
}
