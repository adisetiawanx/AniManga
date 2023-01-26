import ScoreRating from "../UI/Score";

const AniMangaItem = ({ title, year, url, image, episodes, status, score }) => {
  console.info(score);
  return (
    <li className="flex-auto w-52 bg-slate-500 text-slate-50 rounded overflow-hidden shadow m-3">
      <div>
        <div
          className="relative h-[300px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <span className="absolute top-1 left-1 bg-slate-700 rounded-full px-3 py-1">
            {episodes != null ? episodes : "?"} Episode
          </span>
        </div>
      </div>
      <div className="mx-3 my-2">
        <ScoreRating rating={score} />
        <h4 className="font-bold text-xl">{title}</h4>
      </div>
    </li>
  );
};

export default AniMangaItem;
