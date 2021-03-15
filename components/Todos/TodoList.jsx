import { useInfiniteQuery } from '../../hooks';
import { TodoListError, TodoListLoading, TodoListSuccess } from '.';
import { LoadMore } from '..';
import { readManyTodos } from '../../api/todo';

const TodoList = () => {
  const { data, status, ...props } = useInfiniteQuery('todos', readManyTodos);

  return (
    <div className="flex-1">
      {status === 'loading' && <TodoListLoading />}
      {status === 'error' && <TodoListError />}
      {status === 'success' && (
        <>
          <TodoListSuccess {...data} />
          <LoadMore {...props} />
        </>
      )}
    </div>
  );
};

export default TodoList;