const express = require("express");
const bodyParser = require("body-parser");
const PORTA = 3500;
app = express();

let posts = [{ id: 10, title: "Teste", description: "Descrição teste" }];

app.get("/all", (request, response) => {
  response.json(JSON.stringify(posts));
});
app.get("/new", (request, response) => { });

app.listen(PORTA, () => {
  console.log("server is runnning")
});