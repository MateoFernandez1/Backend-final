const express = require("express");

const app = express();

const db = require("db");
const { status } = require("express/lib/response");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});


app.get("/pokemon", async (res, req, next) => { 
  try {
    pokemons = await db. query("select * from pokemon");
    return res.status(200).json({ data: pokemons.rows });
  } 
    catch (error) {
    return next(error)
  }
})

app.listen(PORT, () => console.log(`App running in ${PORT}`));