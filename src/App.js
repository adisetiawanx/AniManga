import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AniMangaContext } from "./contexts/animanga-context";
import AnimeDetail from "./pages/AnimeDetail";
import Home from "./pages/Home";

function App() {
  const { animes, mangas, setAnimeData } = useContext(AniMangaContext);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/anime" replace />} />
      <Route
        path="/anime"
        element={<Home AniMangaData={animes} onSetData={setAnimeData} />}
      />
      <Route
        path="/manga"
        element={<Home AniMangaData={mangas} onSetData={setAnimeData} />}
      />
      <Route path="/anime/:animeId" element={<AnimeDetail />} />
    </Routes>
  );
}

export default App;
