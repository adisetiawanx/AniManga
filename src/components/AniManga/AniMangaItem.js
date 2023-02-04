import { Link } from "react-router-dom";
import ScoreRating from "../UI/Score";

const AniMangaItem = ({ id, title, image, episodes, score }) => {
  return (
    <>
      <Link
        to={`/anime/${id}`}
        className="flex-auto w-52 bg-slate-500 text-slate-50 rounded overflow-hidden shadow m-3"
      >
        <div>
          <div
            className="relative h-[300px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          >
            <span className="absolute top-1 left-1 bg-slate-700 rounded-full px-3 py-1">
              {episodes} Episode
            </span>
          </div>
        </div>
        <div className="mx-3 my-2">
          <ScoreRating
            className="justify-center md:justify-start"
            rating={score}
          />
          <h4 className="font-bold text-xl text-center md:text-left">
            {title}
          </h4>
        </div>
      </Link>
    </>
  );
};

export default AniMangaItem;
