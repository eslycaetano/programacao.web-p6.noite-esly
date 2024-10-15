import { useEffect, useState } from "react";
import { getAllAnimes, deleteAnime } from "../services/AnimeService";

const AnimeList = ({ onEdit }) => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetchAnimes();
  }, []);

  const fetchAnimes = async () => {
    try {
      const data = await getAllAnimes();
      setAnimes(data);
    } catch (error) {
      console.error("Erro ao buscar animes:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAnime(id);
      fetchAnimes();  // Atualiza a lista após deletar
    } catch (error) {
      console.error("Erro ao deletar anime:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Animes</h2>
      <ul>
        {animes.map((anime) => (
          <li key={anime.id}>
            <p>{anime.nome}</p>
            <button onClick={() => onEdit(anime)}>Editar</button>
            <button onClick={() => handleDelete(anime.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
