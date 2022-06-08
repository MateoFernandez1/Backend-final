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
    const pokemons = await db.query(
      `SELECT p.id pokemon_id,
              p.nombre,
              p.img,
              p.tipo,
              a.weight,
              a.height,
              a.ability,
              p.info,
              s.hp,
              s.atk,
              s.def,
              s.satk,
              s.sdef,
              s.spd
      FROM pokemon p
      JOIN about a
        ON a.id = p.about_id
      JOIN stats s
        ON s.id = p.stats_id `
    );

    return res.status(200).json({ data: pokemons.rows });
  } catch (error) {
    return next(error);
  }
});

app.listen(PORT, () => console.log(`App running in ${PORT}`));
