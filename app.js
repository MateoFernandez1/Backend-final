const express = require("express");
const db = require("./db/index");
const cors = require("cors");

const app = express();

const PORT = 3500;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/pokemon", async (req, res, next) => {
  try {
    return res.status(200).json({ data: pokemon });
  } catch (error) {
    return next(error);
  }
});

app.post("/pokemon", (req, res) => {
  const newPokemon = req.body;

  pokemon.push(newPokemon);
  return res.send({ success: true, pokemon: pokemon });
});

app.listen(PORT, () => console.log(`App running in ${PORT}`));

const pokemon = [
  {
    name: "",
    img: "",
    about: {
      weight: 12,
      height: 12,
    },
    stats: {
      hp: 12,
      sdk: 23,
    },
  },
  {
    name: "",
    img: "",
    about: {
      weight: 12,
      height: 12,
    },
    stats: {
      hp: 12,
      sdk: 23,
    },
  },
  {
    name: "",
    img: "",
    about: {
      weight: 12,
      height: 12,
    },
    stats: {
      hp: 12,
      sdk: 23,
    },
  },
  {
    name: "",
    img: "",
    about: {
      weight: 12,
      height: 12,
    },
    stats: {
      hp: 12,
      sdk: 23,
    },
  },
  {
    name: "",
    img: "",
    about: {
      weight: 12,
      height: 12,
    },
    stats: {
      hp: 12,
      sdk: 23,
    },
  },
];
