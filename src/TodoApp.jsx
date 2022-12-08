import { useState } from 'react';
import { useGetTodosQuery, useGetTodoQuery } from './store/apis/todosApi';


export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);
    //const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  
  const nexTodo = () => {
    setTodoId( todoId + 1);
  };

  const prevTodo = () => {
    if ( todoId === 1 ) return;
    setTodoId( todoId - 1);
  };

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>IsLoading: { isLoading ? 'True' : 'False' }</h4>
        <pre>{ JSON.stringify( todo )}</pre>

        <button onClick={ prevTodo }>
            Previous To Do
        </button>

        <button onClick={ nexTodo }>
            Next To Do
        </button>

{ /*
        <ul>
            { todos.map( todo => (
                <li key={ todo.id }>
                    <strong>{ todo.completed ? 'DONE' : 'Pending' } </strong>
                    { todo.title }
                </li>
            ))}
        </ul>
*/ }

    </>
  )
}

