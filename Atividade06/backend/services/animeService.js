// Atividade06\backend\services\animeService.js
const animeModel = require('../models/animeModel');

function getAllAnimes() {
  return animeModel.getAllAnimes();
}

function getAnimeById(id) {
  const anime = animeModel.getAnimeById(id);
  if (!anime) {
    throw new Error('Anime não encontrado');
  }
  return anime;
}

function addAnime(nome, genero, estudio, imagem) {
  if (!nome || !genero || !estudio) {
    throw new Error('Todos os campos são obrigatórios');
  }
  const newAnime = {
    id: animeModel.getAllAnimes().length + 1,
    nome,
    genero,
    estudio,
    imagem 
  };
  animeModel.addAnime(newAnime);
  return newAnime;
}

function updateAnime(id, nome, genero, estudio, imagem) {
  const anime = animeModel.getAnimeById(id);
  if (!anime) {
    throw new Error('Anime não encontrado');
  }
  if (!nome || !genero || !estudio) {
    throw new Error('Todos os campos são obrigatórios');
  }
  const updatedAnime = { id, nome, genero, estudio, imagem };
  animeModel.updateAnime(id, updatedAnime);
  return updatedAnime;
}

function deleteAnime(id) {
  const anime = animeModel.getAnimeById(id);
  if (!anime) {
    throw new Error('Anime não encontrado');
  }
  animeModel.deleteAnime(id);
}

module.exports = {
  getAllAnimes,
  getAnimeById,
  addAnime,
  updateAnime,
  deleteAnime
};
