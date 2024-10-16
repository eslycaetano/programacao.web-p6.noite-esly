// src/components/AnimeList.jsx

import { useEffect, useState } from "react";
import { getAllAnimes, deleteAnime } from "../services/AnimeService";
import { Link } from "react-router-dom";

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
      fetchAnimes(); // Atualiza a lista após deletar
    } catch (error) {
      console.error("Erro ao deletar anime:", error);
    }
  };

  return (
    <div className="p-6 flex justify-center ">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {animes.map((anime) => (
          <li key={anime.id} className="bg-gray-400 border border-green-600 p-5 rounded shadow-lg flex flex-col items-center">
            <Link to={`/animes/${anime.id}`} className="text-xl font-semibold hover:underline text-green-950 text-center truncate w-full">
              {anime.nome}
            </Link>
            <img src={anime.imagem} alt={anime.nome} className="w-40 mt-4 rounded shadow-md" />
            <div className="mt-2 flex justify-center">
              <button onClick={() => onEdit(anime)} className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-700">
                Editar
              </button>
              <button onClick={() => handleDelete(anime.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
