import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";
import { AniMangaContext } from "./contexts/animanga-context";
import AnimeDetail from "./pages/AnimeDetail";
import Home from "./pages/Home";

function App() {
  const { animes, mangas, setAnimeData, setTopAnimeData, topAnime } =
    useContext(AniMangaContext);

  return (
    <ScrollToTop>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/anime" replace />} />
        <Route
          path="/anime"
          element={
            <Home
              animeData={animes}
              onSetAnimeData={setAnimeData}
              topAnimeData={topAnime}
              onSetTopAnimeData={setTopAnimeData}
            />
          }
        />
        <Route
          path="/manga"
          element={<Home AniMangaData={mangas} onSetData={setAnimeData} />}
        />
        <Route path="/anime/:animeId" element={<AnimeDetail />} />
      </Routes>
      <Footer />
    </ScrollToTop>
  );
}

export default App;
