import { useDispatch } from 'react-redux';
import { addTodo } from '../../store';

export function Todo() {
  const dispatch = useDispatch();

  const onAddTodo = (e) => {
    if(e.target.todoInput.value)
      dispatch(addTodo({ text: e.target.todoInput.value, done: false }));
    document.getElementById('todoInput').value = '';
    e.preventDefault();
  }

  return (
    <form className='addTodoForm' onSubmit={onAddTodo}>
      <input name='todoInput' id='todoInput' className='todoInput' />
      <button id='todoBtn' className='todoBtn'>Add</button>
    </form>
  );
}
