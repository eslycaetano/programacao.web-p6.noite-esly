// src/components/AnimeForm.jsx

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
    <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="border border-gray-300 rounded w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Gênero:</label>
        <input
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
          className="border border-gray-300 rounded w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Estúdio:</label>
        <input
          type="text"
          value={estudio}
          onChange={(e) => setEstudio(e.target.value)}
          required
          className="border border-gray-300 rounded w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Imagem (URL):</label>
        <input
          type="text"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          className="border border-gray-300 rounded w-full p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        {existingAnime ? "Atualizar" : "Adicionar"} Anime
      </button>
    </form>
  );
};

export default AnimeForm;
