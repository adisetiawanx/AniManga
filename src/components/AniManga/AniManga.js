import AniMangaList from "./AniMangaList";

const AniManga = ({ AniMangaData }) => {
  return (
    <>
      <ul
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {AniMangaData.map((anime) => (
          <AniMangaList
            key={anime.id}
            title={anime.title}
            url={anime.url}
            episodes={anime.episodes}
            image={anime.image}
            score={anime.score}
            status={anime.status}
            year={anime.year}
          />
        ))}
      </ul>
    </>
  );
};

export default AniManga;
