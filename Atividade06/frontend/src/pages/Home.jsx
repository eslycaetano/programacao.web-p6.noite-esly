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
    <div>
      <h1>Lista de Animes</h1>
      <AnimeList onEdit={handleEdit} />
    </div>
  );
};

export default Home;
