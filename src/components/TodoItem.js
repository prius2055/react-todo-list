import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

import './TodoItem.css';
import { useState } from 'react';

const TodoItem = (props) => {
  const [editable, setEditable] = useState(false);

  const { item, setTodosUpdateFunc, onDelete, onUpdate } = props;

  const onChangeHandler = (id) => {
    setTodosUpdateFunc((prevState) =>
      prevState.map((prevTodo) => {
        if (prevTodo.id === id) {
          return {
            ...prevTodo,
            completed: !prevTodo.completed,
          };
        }
        return prevTodo;
      })
    );
  };

  const onClickHandler = (id) => {
    onDelete(id);
  };

  const editClickHandler = () => {
    setEditable(true);
  };

  const updateHandler = (updatedTitle, id) => {
    onUpdate(updatedTitle, id);
  };

  const updateCloseHandler = (e) => {
    e.preventDefault();
    setEditable(false);
  };

  return (
    <>
      {!editable && (
        <div className='todo-item'>
          <div className='item-detail'>
            <input
              type='checkbox'
              checked={item.completed}
              onChange={() => onChangeHandler(item.id)}
            />
            <p>{item.title}</p>
          </div>
          <div className='item-icons'>
            <AiFillEdit className='edit-icon' onClick={editClickHandler} />
            <FaTrash
              className='delete-icon'
              onClick={onClickHandler.bind(null, item.id)}
            />
          </div>
        </div>
      )}

      {editable && (
        <form className='todo-update' onSubmit={updateCloseHandler}>
          <input
            type='text'
            value={item.title}
            onChange={(e) => updateHandler(e.target.value, item.id)}
            className='update-input'
          />
          <button>Close</button>
        </form>
      )}
    </>
  );
};

export default TodoItem;
