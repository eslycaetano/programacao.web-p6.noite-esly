// models/animeModel.js
const { loadAnimes, saveAnimes } = require('../data/animeData'); // Importa as funções de leitura e escrita

// Funções relacionadas ao modelo de dados
function getAllAnimes() {
  const animes = loadAnimes();
  return animes;
}

function getAnimeById(id) {
  const animes = loadAnimes();
  return animes.find((anime) => anime.id === id);
}

function addAnime(newAnime) {
  const animes = loadAnimes(); 
  animes.push(newAnime); 
  saveAnimes(animes); 
}

function updateAnime(id, updatedAnime) {
  const animes = loadAnimes(); 
  const index = animes.findIndex((anime) => anime.id === id);
  if (index !== -1) {
    animes[index] = updatedAnime; 
    saveAnimes(animes);
  }
}

function deleteAnime(id) {
  let animes = loadAnimes();
  animes = animes.filter((anime) => anime.id !== id); 
  saveAnimes(animes); 
}

module.exports = {
  getAllAnimes,
  getAnimeById,
  addAnime,
  updateAnime,
  deleteAnime
};
