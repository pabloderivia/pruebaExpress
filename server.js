const express = require("express"); //importamos el framework Express
const app = express();

const moviesRouter = require("./api/movies/routes");

app.use(express.json());
app.use("/movies", moviesRouter); //cuando el usuario acceda a un endpoint con /movies/'algomás', llamará al router

const usuarios = [{ id: 0, name: "Pepe" }, { id: 1, name: "Juan" }];

/*app.get("/users", (req, res) => {
  //cuando me hagas un get de la barra (la página principal), haz la sig función callback

  res.json(usuarios);
});*/
/*
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

app.get("/dado/:n", (req, res) => {
  let nCaras = req.params.n;
  parseInt(nCaras); //lo parseamos para evitar posibles pifias/ataques del user
  let num = Math.random() * nCaras;
  num = Math.ceil(num);
  res.json(num);
});

function bodyIsEmpty(body) {
  let contenido = body;
  if ((contenido.id = null)) return true;
}
/*ahora, para agregar un nuevo user
app.post("/users"),
  (req, res) => {
    if (bodyIsEmpty(req.body)) {
      res.status(400).send("Debes pasarme algo en el body");
    } else {
      /*
      const newUser = req.body;
      newUser.id = Math.random();
      usuarios.push(newUser);
      res.json(newUser);
    }
  };*/
app.listen(3000, () => console.log("Ready on port 3000"));
