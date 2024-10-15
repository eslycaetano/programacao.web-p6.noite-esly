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
    <div>
      <h1>{anime.nome}</h1>
      <p>
        <strong>Gênero:</strong> {anime.genero.join(", ")}
      </p>
      <p>
        <strong>Estúdio:</strong> {anime.estudio.join(", ")}
      </p>
      <img src={anime.imagem} alt={anime.nome} style={{ width: "300px" }} />
    </div>
  );
};

export default AnimeDetail;
