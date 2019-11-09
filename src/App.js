import React from 'react';
import TodoList from './components/TodoList';
import TodoListForm from './components/TodoListForm';
import TodoFilter from './components/TodoFilter';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App--header">
        Just another todo list
      </header>
      <TodoListForm/>
      <TodoFilter/>
      <TodoList/>
    </div>
  );
}

export default App;
