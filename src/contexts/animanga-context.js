import { createContext, useCallback, useState } from "react";

export const AniMangaContext = createContext({
  animes: [],
  anime: {},
  mangas: [],
  setAnimeData: (animeData) => {},
  setAnimeDataById: (animeData) => {},
  setTopAnimeData: (animeData) => {},
  setMangaData: (mangaData) => {},
});

const AniMangaContextProvider = (props) => {
  const [animes, setAnimes] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [anime, setAnime] = useState({});
  const [topAnime, setTopAnime] = useState([]);

  const setAnimeData = useCallback((animeData) => {
    const animes = animeData.map((anime) => {
      return {
        id: anime.mal_id,
        title: anime.titles[0]?.title,
        year: anime.year || "unknown",
        url: anime.url,
        image: anime.images.webp.image_url,
        episodes: anime.episodes != null ? anime.episodes : "?",
        status: anime.status,
        score: anime.score,
        synopsis: anime.synopsis,
        type: anime.type,
        duration: anime.duration,
        season: anime.season,
        producer: anime.producers[0]?.name || "unknown",
        studio: anime.studios[0]?.name || "unknown",
        genre: anime.genres.map((genre) => genre.name + ", "),
        trailer: anime.trailer?.youtube_id,
      };
    });

    setAnimes(animes);
  }, []);

  const setAnimeDataById = useCallback((animeData) => {
    const anime = {
      id: animeData.mal_id,
      title: animeData.titles[0].title,
      year: animeData.year || "unknown",
      url: animeData.url,
      image: animeData.images.webp.image_url,
      episodes: animeData.episodes != null ? animeData.episodes : "?",
      status: animeData.status,
      score: animeData.score,
      synopsis: animeData.synopsis,
      type: animeData.type,
      duration: animeData.duration,
      season: animeData.season,
      producer: animeData.producers[0]?.name || "unknown",
      studio: animeData.studios[0]?.name || "unknown",
      genre: animeData.genres.map((genre) => genre.name + ", "),
      trailer: animeData.trailer?.youtube_id,
    };

    setAnime(anime);
  }, []);

  const setTopAnimeData = useCallback((animeData) => {
    const animesTop = animeData.map((anime) => {
      return {
        id: anime.mal_id,
        title: anime.titles[0]?.title,
        year: anime.year || "unknown",
        url: anime.url,
        image: anime.images.webp.image_url,
        episodes: anime.episodes != null ? anime.episodes : "?",
        status: anime.status,
        score: anime.score,
        synopsis: anime.synopsis,
        type: anime.type,
        duration: anime.duration,
        season: anime.season,
        producer: anime.producers[0]?.name || "unknown",
        studio: anime.studios[0]?.name || "unknown",
        genre: anime.genres.map((genre) => genre.name + ", "),
        trailer: anime.trailer?.youtube_id,
      };
    });

    setTopAnime(animesTop);
  }, []);

  const setMangaData = useCallback((mangaData) => {}, []);

  const AniMangaContextValue = {
    animes,
    mangas,
    anime,
    topAnime,
    setAnimeData,
    setAnimeDataById,
    setTopAnimeData,
    setMangaData,
  };

  return (
    <AniMangaContext.Provider value={AniMangaContextValue}>
      {props.children}
    </AniMangaContext.Provider>
  );
};

export default AniMangaContextProvider;
