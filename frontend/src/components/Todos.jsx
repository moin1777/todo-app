import {useState} from "react";
let globalId = 1;
export default function Todos ({ todos }) {
  return (
    <div>
      {todos.map((todo) => <Todo key={globalId++} title={todo.title} description={todo.description} completed={todo.completed}></Todo>)}
    </div>
  )
}

function Todo ({title, description, completed}) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
      <button>{completed ? "Completed" : "Mark as compledted"}</button>
    </div>
  )
}