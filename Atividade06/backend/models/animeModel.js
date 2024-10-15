// models/animeModel.js
let animes = require('../data/animeData');

// Funções relacionadas ao modelo de dados
function getAllAnimes() {
  return animes;
}

function getAnimeById(id) {
  return animes.find((anime) => anime.id === id);
}

function addAnime(newAnime) {
  animes.push(newAnime);
}

function updateAnime(id, updatedAnime) {
  const index = animes.findIndex((anime) => anime.id === id);
  if (index !== -1) {
    animes[index] = updatedAnime;
  }
}

function deleteAnime(id) {
  animes = animes.filter((anime) => anime.id !== id);
}

module.exports = {
  getAllAnimes,
  getAnimeById,
  addAnime,
  updateAnime,
  deleteAnime
};
