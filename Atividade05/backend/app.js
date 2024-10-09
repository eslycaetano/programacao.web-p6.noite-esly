const express = require('express');
const app = express();
let animes = require('./data/animeData'); // Importando a lista de animes de um arquivo separado

// Middleware né
app.use(express.json());

// Listar todos os animes -> GetAll
app.get('/animes', (req, res) => {
    res.json(animes);
  });

// Listar um anime específico por ID -> GetOne
app.get('/animes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const anime = animes.find(anime => anime.id === id);
  
    if (!anime) {
      return res.status(404).json({ error: 'Anime não encontrado' });
    }
  
    res.json(anime);
  });

// Adicionar um novo anime -> Create
app.post('/animes', (req, res) => {
    const { nome, genero, estudio } = req.body;

    if (!nome || !genero || !estudio) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const newAnime = {
        id: animes.length + 1, // Gerando um ID simples.
        nome,
        genero,
        estudio
        };

        animes.push(newAnime);
        res.status(201).json(newAnime);
    });

// Atualizar um anime -> Update (PUT)
app.put('/animes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, genero, estudio } = req.body;
  
    const anime = animes.find(anime => anime.id === id);
  
    if (!anime) {
      return res.status(404).json({ error: 'Anime não encontrado' });
    }
  
    if (!nome || !genero || !estudio) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
  
    anime.nome = nome;
    anime.genero = genero;
    anime.estudio = estudio;
  
    res.json(anime);
  });

// Deletar um anime -> Delete
app.delete('/animes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    animes = animes.filter(anime => anime.id !== id);
  
    res.status(204).send(); // Sem conteudo
  });
  
  module.exports = app;