import React from 'react';
import { deleteTodo, updateTodo } from '../services/todoService';



const Todo = ({ text, todos, setTodos, todo }) => {

    const deleteHandler = async () => {
        const originalTodos = todos;
        setTodos(todos.filter(el => el._id !== todo._id));
        try {
            await deleteTodo(todo._id)
        }
        catch (ex) {
            alert('Smth failed while deleting a todo, I am sorry');
            setTodos(originalTodos);
        }
    };

    const handleUpdate = async () => {
        setTodos(todos.map(item => item._id === todo._id ? { ...item, completed: !item.completed } : { ...item }));
        todo.completed = !todo.completed;
        await updateTodo(todo);
    }


    return (
        <>
            <div className="todo">
                <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
                <button
                    onClick={handleUpdate}
                    className='complete-btn'>
                    <i className="fas fa-check"></i>
                </button>
                <button
                    onClick={deleteHandler}
                    className='trash-btn'>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </>
    );
}

export default Todo;





