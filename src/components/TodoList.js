import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todo
                            todo={todo}
                            key={todo._id}
                            text={todo.text}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}
export default TodoList;
