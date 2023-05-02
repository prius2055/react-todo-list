import { useEffect, useState } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

import './TodoLogic.css';

// let todos;

// if (localStorage.getItem('todos')) {
//   todos = JSON.parse(localStorage.getItem('todos'));
// } else {
//   todos = [];
// }

const arrayOfTodos = [
  {
    id: 1,
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: 2,
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: 3,
    title: 'Test the app',
    completed: false,
  },
  {
    id: 4,
    title: 'Deploy to live server',
    completed: false,
  },
];

const TodosLogic = () => {
  const [todos, setTodos] = useState(arrayOfTodos);

  const todoItemHandler = (newTodoTitle) => {
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoFunction = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...filteredTodos]);
  };

  const updateTodoFunction = (updatedTodoTitle, id) => {
    const updatedTodoItem = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = updatedTodoTitle;
      }
      return todo;
    });

    setTodos(updatedTodoItem);
  };

  return (
    <div className='todo-logic'>
      <InputTodo todoInputSubmitHandler={todoItemHandler} />
      <TodoList
        todoArray={todos}
        setTodosFunc={setTodos}
        deleteHandler={deleteTodoFunction}
        updateHandler={updateTodoFunction}
      />
    </div>
  );
};

export default TodosLogic;
