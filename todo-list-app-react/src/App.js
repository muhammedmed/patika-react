import { useEffect, useState } from 'react';

import './App.css';

import Footer from './components/Filters';
import Header from './components/Form';
import Section from './components/List';

function App() {
  const [filter, setFilter] = useState("Filter")
  const [todos, setTodos] = useState([]);
  const [fTodos, setFTodos] = useState(todos)

  useEffect(() => {
    if (filter === "Filter")
      setFTodos(todos)

  }, [filter, todos])

  return [
    <section className="todoapp">
      <Header todos={fTodos} setTodos={setTodos} />
      <Section todos={fTodos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} setFilter={setFilter} filter={filter}/>
    </section>

  ];
}

export default App;
