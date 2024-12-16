import React, { useRef } from 'react';

export default function Form({ onAddTodo }) {
    const inputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        const inputElement = inputRef.current;
        const value = inputElement.value.trim();

        if (value) {
            onAddTodo({
                id: Date.now(),
                name: value,
                done: false
            });
            inputElement.value = '';
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo"
                placeholder="type a new todo"
                ref={inputRef}
            />
            <button type="submit">Add todo</button>
        </form>
    );
}