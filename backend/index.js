const express = require("express");
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the invalid inputs"
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });

  res.json({
    msg: "todo created"
  })
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find();

  res.json({
    todos
  })
});

app.put("/todos", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the invalid inputs"
    });
    return;
  }

  await todo.updateOne({
    _id: updatePayload.id
  }, {
    completed: true
  });

  res.json({
    msg: "Todo marked as completed"
  })
});

app.listen(port, () => {
  console.log(`The port is listening on http://localhost:${port}`);
});