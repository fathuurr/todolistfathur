import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Component/Form';
import TodoList from './Component/TodoList';

function App() {
  // State stuff
  const [inputText, setInputText] = useState('');
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredToDos, setFilteredToDos] = useState([]);
  // run once when the app start
  useEffect(() => {
    getLocalToDos();
  }, []);
  // use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  // Functions

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredToDos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  };

  // local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalToDos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setToDos(todoLocal);
    }
  };
  return (
    <div className='App'>
      <header>
        <h1>Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setToDos={setToDos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredToDos={filteredToDos}
        setToDos={setToDos}
        todos={todos}
      />
    </div>
  );
}

export default App;
