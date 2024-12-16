import React, { useState, useEffect } from 'react';
import TodoList from "../TodoList";
import Form from "../Form";
import './App.css'

function Todo() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const handleToggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleDeleteAllTodos = () => {
        setTodos([]);
    };

    return (
        <div className="todo-container">
            <h1>My Todo App</h1>
            <Form onAddTodo={handleAddTodo} />
            <TodoList
                todos={todos}
                onToggleTodo={handleToggleTodo}
                onDeleteTodo={handleDeleteTodo}
            />
            {todos.length > 0 && (
                <button
                    onClick={handleDeleteAllTodos}
                    className="delete-all-btn"
                >
                    Delete All Todos
                </button>
            )}
        </div>
    );
}

export default Todo;