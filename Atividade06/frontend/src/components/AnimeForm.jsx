import { useState } from "react";
import { addAnime, updateAnime } from "../services/AnimeService";

const AnimeForm = ({ existingAnime, onSave }) => {
  const [nome, setNome] = useState(existingAnime?.nome || "");
  const [genero, setGenero] = useState(existingAnime?.genero || "");
  const [estudio, setEstudio] = useState(existingAnime?.estudio || "");
  const [imagem, setImagem] = useState(existingAnime?.imagem || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newAnime = { nome, genero, estudio, imagem };
    
    try {
      if (existingAnime) {
        await updateAnime(existingAnime.id, newAnime);
      } else {
        await addAnime(newAnime);
      }
      onSave();  // Callback para notificar a página de que o anime foi salvo
    } catch (error) {
      console.error("Erro ao salvar o anime:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Gênero:</label>
        <input 
          type="text" 
          value={genero} 
          onChange={(e) => setGenero(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Estúdio:</label>
        <input 
          type="text" 
          value={estudio} 
          onChange={(e) => setEstudio(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Imagem (URL):</label>
        <input 
          type="text" 
          value={imagem} 
          onChange={(e) => setImagem(e.target.value)} 
        />
      </div>

      <button type="submit">{existingAnime ? "Atualizar" : "Adicionar"} Anime</button>
    </form>
  );
};

export default AnimeForm;
