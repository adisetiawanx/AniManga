import { createContext, useCallback, useState } from "react";

export const AniMangaContext = createContext({
  animes: [],
  mangas: [],
  setAnimeData: (animeData) => {},
  setMangaData: (mangaData) => {},
});

const AniMangaContextProvider = (props) => {
  const [animes, setAnime] = useState([]);
  const [mangas, setManga] = useState([]);

  const setAnimeData = useCallback((animeData) => {
    const animes = animeData.map((anime) => {
      return {
        id: anime.mal_id,
        title: anime.titles[0].title,
        year: anime.year || "unknown",
        url: anime.url,
        image: anime.images.webp.image_url,
        episodes: anime.episodes,
        status: anime.status,
        score: anime.score,
      };
    });

    setAnime(animes);
  }, []);

  const setMangaData = useCallback((mangaData) => {}, []);

  const AniMangaContextValue = {
    animes,
    mangas,
    setAnimeData,
    setMangaData,
  };

  return (
    <AniMangaContext.Provider value={AniMangaContextValue}>
      {props.children}
    </AniMangaContext.Provider>
  );
};

export default AniMangaContextProvider;
