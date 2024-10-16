import { useLocation, useNavigate } from "react-router-dom";
import AnimeForm from "../components/AnimeForm";

const AddAnime = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const animeToEdit = location.state || null;

  const handleSave = () => {
    navigate("/");  // Após salvar, redireciona para a lista de animes
  };

  return (
    <div>
      <h1>{animeToEdit ? "Editar Anime" : "Adicionar Anime"}</h1>
      <AnimeForm existingAnime={animeToEdit} onSave={handleSave} />
    </div>
  );
};

export default AddAnime;
