// src/pages/Home.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimeList from "../components/AnimeList";

const Home = () => {
  const navigate = useNavigate();
  const [animeToEdit, setAnimeToEdit] = useState(null);

  const handleEdit = (anime) => {
    navigate(`/edit-anime/${anime.id}`, { state: anime });
  };

  return (
    <div className="p-6 bg-gray-600 min-h-screen">
      <h1 className="text-center text-2xl font-bold mb-4 text-gray-200">Minha Lista de Animes</h1>
      <AnimeList onEdit={handleEdit} />
      <p className="text-center mt-4 text-gray-200"> Se você acha algum desses animes ruins, reveja seus conceitos de qualidade.</p>
      <p className="text-center mt-4 text-gray-200"> &copy; Direitos reservados a Esly mesmo.</p>
    </div>
  );
};

export default Home;
