import React, { useState } from "react";

function TodoList () {
    const initialTodos = [
        {
            id:0,
            name: 'My first todo',
            status:''
        }, {
            id:1,
            name: 'My second todo',
            status:''
        }, {
            id:2,
            name:'My third todo',
            status:''
        }];

    const [todos, setTodos] = useState(initialTodos);
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <div>
                <h2>Todos</h2>
                <ul>
                    {todos.map((todo) => (
                <li key={todo.id}><input type="checkbox" onChange={handleOnChange}/>{todo.name}</li>
                    ))}

                </ul>
            </div>
        </>
    );
}

export default TodoList