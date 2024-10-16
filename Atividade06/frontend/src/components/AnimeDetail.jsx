// src/components/AnimeDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../services/AnimeService"; // Função para pegar o anime pelo ID

const AnimeDetail = () => {
  const { id } = useParams(); // Pega o ID da URL
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const data = await getAnimeById(id);
        setAnime(data);
      } catch (error) {
        console.error("Erro ao buscar anime:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!anime) {
    return <div>Anime não encontrado.</div>;
  }

  return (
    <div className="p-6 bg-gray-600 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-200">{anime.nome}</h1>
      <div className="flex flex-col items-center">
        <img src={anime.imagem} alt={anime.nome} className="w-60 mt-4 rounded shadow-md" />
        <div className="flex flex-col items-center mt-4">
          <p className="text-lg text-gray-200">
            <strong>Gênero:</strong> {anime.genero.join(", ")}
          </p>
          <p className="text-lg text-gray-200">
            <strong>Estúdio:</strong> {anime.estudio.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
