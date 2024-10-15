// Atividade06\frontend\src\services\AnimeService.js

import axios from 'axios';

const API_URL = 'http://localhost:1402/animes';

// Função para obter todos os animes (GET)
export const getAllAnimes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar animes:', error);
    throw error;
  }
};

// Função para adicionar um novo anime (POST)
export const addAnime = async (anime) => {
  try {
    const response = await axios.post(API_URL, anime);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar anime:', error);
    throw error;
  }
};

// Função para atualizar um anime (PUT)
export const updateAnime = async (id, anime) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, anime);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar anime:', error);
    throw error;
  }
};

// Função para deletar um anime (DELETE)
export const deleteAnime = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Erro ao deletar anime:', error);
    throw error;
  }
};

// Função para obter um anime pelo ID (GET)
export const getAnimeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar anime por ID:', error);
    throw error;
  }
};
