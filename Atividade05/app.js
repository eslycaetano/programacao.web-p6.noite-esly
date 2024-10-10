const express = require("express");
const app = express();
let animes = require("./data/animeData"); // Importando a lista de animes de um arquivo separado

// Middleware né
app.use(express.json());

// Listar todos os animes -> GetAll
app.get("/animes", (req, res) => {
  try {
    res.json(animes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar animes." });
  }
});

// Listar um anime específico por ID -> GetOne
app.get("/animes/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const anime = animes.find((anime) => anime.id === id);
    if (!anime) {
      return res.status(404).json({ error: "Anime não encontrado." });
    }

    res.json(anime);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o anime." });
  }
});

// Adicionar um novo anime -> Create
app.post("/animes", (req, res) => {
  try {
    const { nome, genero, estudio } = req.body;

    if (!nome || !genero || !estudio) { //Garantindo que sejá obrigatorio todos os campos
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios." });
    }

    const newAnime = {
      id: animes.length + 1, // Gerando um ID simples, sempre vai ser a quantidade +1.
      nome,
      genero,
      estudio,
    };

    animes.push(newAnime);
    res.status(201).json(newAnime);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar o anime." });
  }
});

// Atualizar um anime -> Update (PUT)
app.put("/animes/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { nome, genero, estudio } = req.body;
    const anime = animes.find((anime) => anime.id === id);

    if (!anime) {
      return res.status(404).json({ error: "Anime não encontrado." });
    }

    if (!nome || !genero || !estudio) { //Garantindo que sejá obrigatorio todos os campos
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios." });
    }

    anime.nome = nome;
    anime.genero = genero;
    anime.estudio = estudio;

    res.json(anime);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o anime." });
  }
});

// Deletar um anime -> Delete
app.delete("/animes/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const animeExists = animes.some((anime) => anime.id === id);
    if (!animeExists) {
      return res.status(404).json({ error: "Anime não encontrado." });
    }

    animes = animes.filter((anime) => anime.id !== id);
    res.status(200).json({ message: "Anime excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o anime." });
  }
});

module.exports = app;
