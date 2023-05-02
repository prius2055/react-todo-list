import Header from './Header';
import TodosLogic from './TodosLogic';

import './TodoApp.css';

const TodoApp = () => (
  <div className="todo-app">
    <Header />
    <TodosLogic />
  </div>
);

export default TodoApp;
