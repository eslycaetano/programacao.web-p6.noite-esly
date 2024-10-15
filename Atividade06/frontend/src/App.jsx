import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddAnime from "./pages/AddAnime";
import Navbar from "./components/Navbar";
import AnimeDetail from "./components/AnimeDetail";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-anime" element={<AddAnime />} />
          <Route path="/edit-anime/:id" element={<AddAnime />} />{" "}
          {/* Reutilizando o componente */}
          <Route path="/animes/:id" element={<AnimeDetail />} />{" "}
          {/* Página de detalhes do anime */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
