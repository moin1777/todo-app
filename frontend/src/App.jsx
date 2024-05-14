import {useEffect, useState} from 'react'
import './App.css'
import CreateTodo from "./components/CreateTodo.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function (res){
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []);

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App