import React from 'react';
import { saveTodo } from '../services/todoService';


const Form = ({ setInputText, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = async (e) => {
        e.preventDefault();
        const obj = { text: inputText, completed: false };
        await saveTodo(obj);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };


    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button
                onClick={submitTodoHandler}
                className="todo-button"
                type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}
export default Form;