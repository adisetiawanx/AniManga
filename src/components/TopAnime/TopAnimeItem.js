import { Link } from "react-router-dom";
import ScoreRating from "../UI/Score";

const TopAnimeItem = ({ id, title, score, image, episodes }) => {
  return (
    <Link
      to={`/anime/${id}`}
      className="flex justify-center bg-slate-500 rounded shadow-md overflow-hidden  text-white my-5 mx-2"
    >
      <img className="w-[40%]" src={image} alt={title} />
      <div className="w-[60%] mx-3 my-1">
        <h4 className="text-lg font-semibold">{title}</h4>
        <ScoreRating rating={score} />
        <span>{episodes} Episode</span>
      </div>
    </Link>
  );
};

export default TopAnimeItem;
