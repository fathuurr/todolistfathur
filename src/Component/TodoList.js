import React from 'react';
import Todo from './Todo';
export default function TodoList({ todos, setToDos, filteredToDos }) {
  // console.log(todos);
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredToDos.map((todo) => (
          <Todo
            setToDos={setToDos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}
