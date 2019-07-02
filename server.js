const express = require("express"); //importamos el framework Express
const app = express();

const usuarios = [{ id: 0, name: "Pepe" }, { id: 1, name: "Juan" }];
/*
app.get("/", (req, res) => {
  //cuando me hagas un get de la barra (la página principal), haz la sig función callback
  console.log("Request: ", req);
  res.send("¡Hola mundo!");
});
*/
app.get("/users", (req, res) => {
  //cuando me hagas un get de la barra (la página principal), haz la sig función callback

  res.json(usuarios);
});

app.get("/user/:name", (req, res) => {
  //los ':' indican que id es una variable
  const userName = req.params.name;
  const user = usuarios.find(user => user.name == userName);
  res.json(user);
});

app.get("/user/:id", (req, res) => {
  //los ':' indican que id es una variable
  const userId = req.params.id;
  const user = usuarios.find(user => user.id == userId);
  res.json(user);
});

app.listen(3000, () => console.log("Ready on port 3000"));
