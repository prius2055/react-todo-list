import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todoArray, setTodosFunc, deleteHandler, updateHandler } = props;
  return (
    <div className='todo-list'>
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
