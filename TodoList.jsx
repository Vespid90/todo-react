import React from "react";

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
    return (
        <div>
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div className="todo-item">
                            <input
                                type="checkbox"
                                id={todo.id}
                                checked={todo.done}
                                onChange={() => onToggleTodo(todo.id)}
                            />
                            <span className={todo.done ? 'completed' : ''}>
                                {todo.name}
                            </span>
                            <button
                                onClick={() => onDeleteTodo(todo.id)}
                                className="delete-btn"
                            >
                                ✕
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;