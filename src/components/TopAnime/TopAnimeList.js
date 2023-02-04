import PreTopAnime from "../UI/PreTopAnime";
import TopAnimeItem from "./TopAnimeItem";

const TopAnimeList = ({ topAnimes, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <>
          <PreTopAnime />
          <PreTopAnime />
          <PreTopAnime />
          <PreTopAnime />
          <PreTopAnime />
          <PreTopAnime />
          <PreTopAnime />
          <PreTopAnime />
          <PreTopAnime />
          <PreTopAnime />
        </>
      ) : (
        <ul>
          {topAnimes.map((anime) => (
            <li key={anime.id}>
              <TopAnimeItem
                id={anime.id}
                score={anime.score}
                title={anime.title}
                image={anime.image}
                episodes={anime.episodes}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TopAnimeList;
