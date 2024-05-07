const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://moinmalek6612:wptWWG4YdfrjZClf@cluster0.ae0vamz.mongodb.net/todos");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo
}