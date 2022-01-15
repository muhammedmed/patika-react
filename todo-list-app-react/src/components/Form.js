import React, { useState } from 'react'

function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState("")
    const addTodo = (e) => {
        e.preventDefault()
        setTodos(state => [...state, {
            id: Math.random() * 50,
            todo,
            done: false
        }])
        setTodo("")

    }
    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={addTodo}>
                <input
                    value={todo}
                    type="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    onChange={(e) => setTodo(e.target.value)}
                />
            </form>
        </header>
    )
}

export default Form
