import PreAniManga from "../UI/PreAniManga";
import AniMangaItem from "./AniMangaItem";

const AniMangaList = ({ AniMangaData, isLoading }) => {
  return (
    <>
      <div className="bg-slate-600 rounded shadow py-1 mb-2 mx-2">
        <h3 className="font-bold text-center text-slate-50 text-xl">
          All Anime
        </h3>
      </div>
      <div className="flex flex-wrap justify-between">
        {isLoading ? (
          <>
            {/* idk to render multiple element without array */}
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
            <PreAniManga />
          </>
        ) : (
          AniMangaData.map((anime) => (
            <AniMangaItem
              key={anime.id}
              id={anime.id}
              title={anime.title}
              url={anime.url}
              episodes={anime.episodes}
              image={anime.image}
              score={anime.score}
              status={anime.status}
              year={anime.year}
            />
          ))
        )}
      </div>
    </>
  );
};

export default AniMangaList;
