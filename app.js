const express = require("express");
const db = require("./db/index");
const cors = require("cors");
import Bulbasaur from "./images/bulbasaur.png"; 
import Charmander from "./images/charmander.png"; 
import Squirtle from "./images/squirtle.png"; 
import Butterfree from "./images/butterfree.png"; 
import Pikachu from "./images/pikachu.png"; 
import Gastly from "./images/gastly.png"; 
import Ditto from "./images/ditto.png"; 
import Mew from "./images/mew.png"; 
import Aron from "./images/aron.png"; 

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
    "name":"Bulbasaur",
    "number":"#001",
    "img":Bulbasaur,
    "type":"Grass",
    "type2":"Poison",
    "weigth":"6.9 kg",
    "height":"0.7 m",
    "ability":"Overgrow Chlorophyll",
    "info":"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "hp":45,
    "atk":49,
    "def":49,
    "satk":65,
    "sdef":65,
    "spd":45,
    "color":"verde",
    "color2":"purpura2",
  },
  {
    "name":"Squirtle",
    "number":"#007",
    "img":Squirtle,
    "type":"Water",
    "type2":null,
    "weigth":"9.0 kg",
    "height":"0.5 m",
    "ability":"Torrent Rain-Dish",
    "info":"After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
    "hp":44,
    "atk":48,
    "def":65,
    "satk":50,
    "sdef":64,
    "spd":43,
    "color":"azul",
    "color2":"null",

    
},
 {
    "name":"Butterfree",
    "number":"#012",
    "img":Butterfree,
    "type":"Bug",
    "type2":"Flying",
    "weigth":"32 kg",
    "height":"1.1 m",
    "ability":"Compound-Eyes Tinted-Lens",
    "info":"The wings are protected by a rain-repellent dust. As a result, this Pokémon can fly about even in rain.",
    "hp":60,
    "atk":45,
    "def":50,
    "satk":80,
    "sdef":80,
    "spd":70,
    "color":"verde2",
    "color2":"violetita2",

 },
 {
    "name":"Pikachu",
    "number":"#025",
    "img":Pikachu,
    "type":"Electric",
    "type2":null,
    "weigth":"6.0 kg",
    "height":"0.4 m",
    "ability":"Static Lightning-Rod",
    "info":"It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.",
    "hp":35,
    "atk":55,
    "def":40,
    "satk":50,
    "sdef":50,
    "spd":90,
    "color":"amarillo",
    "color2":"null",

 },
 
 {
    "name":"Gastly",
    "number":"#092",
    "img":Gastly,
    "type":"Ghost",
    "type2":"Poison",
    "weigth":"0.1 kg",
    "height":"1.3 m",
    "ability":"Levitate",
    "info":"Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
    "hp":30,
    "atk":35,
    "def":30,
    "satk":100,
    "sdef":35,
    "spd":80,
    "color":"violeta",
    "color2":"purpura2",

 },
 {
    "name":"Ditto",
    "number":"#132",
    "img":Ditto,
    "type":"Normal",
    "type2":null,
    "weigth":"4.0 kg",
    "height":"0.3 m",
    "ability":"Limber 	Imposter",
    "info":"It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
    "hp":48,
    "atk":48,
    "def":48,
    "satk":48,
    "sdef":48,
    "spd":48,
    "color":"gris",
    "color2":"null",

 },
 {
    "name":"Mew",
    "number":"#152",
    "img":Mew,
    "type":"Psychic",
    "type2":null,
    "weigth":"4.0 kg",
    "height":"0.4 m",
    "ability":"Synchronize",
    "info":"When viewed through a microscope, this Pokémon's short, fine, delicate hair can be seen.",
    "hp":100,
    "atk":100,
    "def":100,
    "satk":100,
    "sdef":100,
    "spd":100,
    "color":"rosado",
    "color2":"null",

 },
 {
    "name":"Aron",
    "number":"#304",
    "img":Aron,
    "type":"Steel",
    "type2":"Rock",
    "weigth":"60 kg",
    "height":"0.4 m",
    "ability":"Sturdy Rock-Head",
    "info":"It eats iron to build its steel body. It is a pest that descends from mountains to eat bridges and train tracks.",
    "hp":50,
    "atk":70,
    "def":100,
    "satk":40,
    "sdef":40,
    "spd":30,
    "color":"plateado",
    "color2":"marron2",

 }
];