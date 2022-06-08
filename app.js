const express = require("express");
const db = require("./db/index");
const app = express();
const PORT = 3000;



app.get("/pokemon", async (res, req, next) => { 
  try {
    
    const pokemonResults = []  
    const pokemons = await db. query(
      "select p.id pokemon_id, p.name, p.number, p.img p.type, p.type2, p.weigth, p.heigth, p.ability, p.info, p.hp, p.atk, p.def, p.satk, p.sdef, p.spd from  pokemon p join about a on a.id = p.about.id joinn stats s on s.id = p.stats.id")
      for (let index = 0; index <pokemonResults.length; index++){
        const element = array[index];

    return res.status(200).json({ data: pokemons.rows})
  }} catch (error) {
    return next(error)
  }
})

app.listen(PORT, () => console.log(`App running in ${PORT}`));