const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/todos", (req, res) => {

});

app.get("/todos", (req, res) => {

});

app.put("/todos", (req, res) => {

});

app.listen(port, () => {
  console.log(`The port is listening on http://localhost:${port}`);
});