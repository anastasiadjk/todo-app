import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { getTodos } from './services/todoService';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [inputText]);

  const getLocalTodos = async () => {
    const { data: dbTodos } = await getTodos();
    setTodos(dbTodos);
  }

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default: setFilteredTodos(todos);
        break;
    }
  }


  return (
    <>
      <div className="app">
        <header>
          <h1>My Todo List</h1>
        </header>
        <Form
          setInputText={setInputText}
          inputText={inputText}
          setStatus={setStatus}
        />
        <TodoList
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </>
  );
}
export default App;









