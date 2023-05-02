import { FaPlusCircle } from 'react-icons/fa';

import './InputTodo.css';
import { useState } from 'react';

const InputTodo = (props) => {
  const [newTodoTitle, setNewTodoTitle] = useState();
  const [message, setMessage] = useState('');

  const { todoInputSubmitHandler } = props;

  const onChangeHandler = (e) => {
    setNewTodoTitle(e.target.value);
  };

  const todoInputSubmit = (e) => {
    e.preventDefault();
    if (newTodoTitle.trim()) {
      todoInputSubmitHandler(newTodoTitle);
      setNewTodoTitle('');
      setMessage('');
    } else {
      setMessage('Please enter todo item');
    }
  };

  return (
    <>
      <form className='input-todo' onSubmit={todoInputSubmit}>
        <input
          type='text'
          placeholder='Add todo...'
          onChange={onChangeHandler}
          value={newTodoTitle}
        />
        <FaPlusCircle className='add-icon' onClick={todoInputSubmit} />
      </form>
      <span>{message}</span>
    </>
  );
};

export default InputTodo;
