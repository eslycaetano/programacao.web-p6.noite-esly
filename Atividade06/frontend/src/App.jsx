import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddAnime from "./pages/AddAnime";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-anime" element={<AddAnime />} />
          <Route path="/edit-anime/:id" element={<AddAnime />} /> {/* Reutilizando o componente */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
