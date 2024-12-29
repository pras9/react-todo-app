import { TodoStore, addTodoAction } from '../../store';

export function Todo() {
  const addTodo = (e) => {
    TodoStore.dispatch(addTodoAction({ text: e.target.todoInput.value, done: false }));
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
