import React from 'react';

export default function Form({
  setInputText,
  todos,
  setToDos,
  inputText,
  setStatus,
}) {
  // Here I can Write javascript code and function
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setToDos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type='text'
          className='todo-input'
        />
        <button
          onClick={submitToDoHandler}
          className='todo-button'
          type='submit'
        >
          <i className='fas fa-plus-square'></i>
        </button>
        <div className='select'>
          <select onChange={statusHandler} name='todos' className='filter-todo'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}
