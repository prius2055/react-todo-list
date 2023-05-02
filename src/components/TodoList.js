import propTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    todoArray, setTodosFunc, deleteHandler, updateHandler,
  } = props;
  return (
    <div className="todo-list">
      {todoArray.map((todoArrayItem) => (
        <TodoItem
          key={todoArrayItem.id}
          item={todoArrayItem}
          setTodosUpdateFunc={setTodosFunc}
          onDelete={deleteHandler}
          onUpdate={updateHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todoArray: propTypes.oneOfType([propTypes.array]).isRequired,
  setTodosFunc: propTypes.func.isRequired,
  deleteHandler: propTypes.func.isRequired,
  updateHandler: propTypes.func.isRequired,
};
