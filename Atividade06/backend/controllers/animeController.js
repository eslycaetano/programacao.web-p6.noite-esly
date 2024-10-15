// controllers/animeController.js
const animeService = require('../services/animeService');

function getAllAnimes(req, res) {
  try {
    const animes = animeService.getAllAnimes();
    res.json(animes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function getAnimeById(req, res) {
  try {
    const id = parseInt(req.params.id);
    const anime = animeService.getAnimeById(id);
    res.json(anime);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

function addAnime(req, res) {
  try {
    const { nome, genero, estudio } = req.body;
    const newAnime = animeService.addAnime(nome, genero, estudio);
    res.status(201).json(newAnime);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

function updateAnime(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { nome, genero, estudio } = req.body;
    const updatedAnime = animeService.updateAnime(id, nome, genero, estudio);
    res.json(updatedAnime);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

function deleteAnime(req, res) {
  try {
    const id = parseInt(req.params.id);
    animeService.deleteAnime(id);
    res.json({ message: 'Anime excluído com sucesso.' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  getAllAnimes,
  getAnimeById,
  addAnime,
  updateAnime,
  deleteAnime
};
