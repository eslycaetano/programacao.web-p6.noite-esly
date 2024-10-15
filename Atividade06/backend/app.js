// app.js
const express = require("express");
const animeController = require("./controllers/animeController");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

app.get("/animes", animeController.getAllAnimes);
app.get("/animes/:id", animeController.getAnimeById);
app.post("/animes", animeController.addAnime);
app.put("/animes/:id", animeController.updateAnime);
app.delete("/animes/:id", animeController.deleteAnime);

module.exports = app;
