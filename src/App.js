import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoListForm from './components/TodoListForm';
import TodoFilter from './components/TodoFilter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Just another todo list
      </header>
      <TodoListForm/>
      <TodoFilter/>
      <TodoList/>
    </div>
  );
}

export default App;
