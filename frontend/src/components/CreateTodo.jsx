import {useState} from "react";

function CreateTodo () {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>

      <input type={"text"} placeholder={"title"} onChange={(e) => {
        const value = e.target.value;
        setTitle(value);
      }}/><br/><br/>

      <input type={"text"} placeholder={"description"} onChange={(e) => {
        const value = e.target.value;
        setDescription(value);
      }}/><br/><br/>

      <button onClick={() => {
        fetch("http://localhost:3000/todos", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description
          }),
          headers: {
            "content-type": "application/json"
          }
        })
          .then(async (res) => {
            let json = await res.json();
            alert(json.msg)
          })
      }}>Add a todo</button>

    </div>
  )
}

export default CreateTodo;