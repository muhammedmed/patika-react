import React from 'react'

function Filters({ todos, setTodos }) {
    const left = todos.filter(item => item.done === false).length
    return (
        <footer className="footer">

            <span className="todo-count">
                <strong >{left}</strong>
                <span>{left <= 1 ? " item left" : " items left"}</span>
            </span>

            <meta property="activeFilter" content="all" />
            <ul className="filters">
                <li>
                    <a href="#/">All</a>
                </li>
                <li>
                    <a href="#/">Active</a>
                </li>
                <li>
                    <a href="#/">Completed</a>
                </li>
            </ul>
  
            <button
                type='button'
                onClick={() => {
                    setTodos(state => state.filter(item => item.done === false))
                }}
                className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default Filters
