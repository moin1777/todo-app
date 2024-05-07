import {useState} from "react";

export default function Todos ({ todos }) {
  const [todoCompleted, setTodoCompleted] = useState(false);

  return (
    <div>
      {todos.map((todo) => {
        return (
        <div>
          <h1>{todo.title}</h1>
          <h1>{todo.description}</h1>
          <button>{todo.completed ? "Completed" : "Mark as compledted"}</button>
        </div>
        )
      })}
    </div>
  )
}