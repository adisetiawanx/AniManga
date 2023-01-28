import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ScoreRating from "../components/UI/Score";

import { AniMangaContext } from "../contexts/animanga-context";
import useHttp from "../hooks/use-http";
import { getAnimeDataById } from "../lib/api";

const AnimeDetail = () => {
  const { animeId } = useParams();
  const navigate = useNavigate();
  const { anime, animes, setAnimeDataById } = useContext(AniMangaContext);
  const { sendRequest } = useHttp(getAnimeDataById);

  //caching from animes that the data already on the contextstore
  const currAnimeCache = animes.find((anime) => anime.id === Number(animeId));
  const currAnime = currAnimeCache ? currAnimeCache : anime;

  useEffect(() => {
    //checking that anime already in cache, if its not then fetch from api by id
    if (!currAnimeCache) {
      sendRequest(setAnimeDataById, { id: Number(animeId) });
    }
  }, [sendRequest, setAnimeDataById, animeId, currAnimeCache]);

  return (
    <>
      <div className="container text-slate-900 mx-auto">
        <button
          className="bg-slate-600 rounded text-white text-lg shadow px-3 py-1 ml-3"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <div className="md:flex md:items-start md:justify-center my-10">
          <div className="md:flex md:flex-wrap md:justify-center w-full md:max-w-[20%] md:mr-10 ">
            <div className="md:w-full  mb-3">
              <img
                className="mx-auto"
                src={currAnime.image}
                alt={currAnime.title}
              ></img>
            </div>
            <div className="bg-slate-500 w-fit mx-auto text-white rounded-full mb-5 md:mb-0 px-3 py-1">
              <ScoreRating rating={currAnime.score} />
            </div>
          </div>
          <div>
            <div className="bg-slate-700 md:rounded shadow py-1 my-2">
              <h3 className="font-bold text-center text-slate-50 text-xl">
                Information
              </h3>
            </div>
            <div className="bg-slate-500 text-white md:rounded p-3 mb-3">
              <h2 className="font-bold text-center md:text-left text-2xl">
                {currAnime.title}
              </h2>
            </div>
            <div className="bg-slate-500 text-white md:rounded p-5 mb-3">
              <h3 className="font-bold text-xl mb-2">Synopsis</h3>
              <p>{currAnime.synopsis}</p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap bg-slate-500 text-white md:rounded p-5">
              <ul className="md:w-[50%] text-lg font-semibold">
                <li>Type : {currAnime.type}</li>
                <li>Year : {currAnime.year}</li>
                <li>Total Episode : {currAnime.episodes}</li>
                <li>Status : {currAnime.status}</li>
                <li>Duration : {currAnime.duration}</li>
              </ul>
              <ul className="md:w-[50%] text-lg font-semibold">
                <li>Season : {currAnime.season}</li>
                <li>Producer : {currAnime.producer}</li>
                <li>Studio : {currAnime.studio}</li>
                <li>Genre : {currAnime.genre}</li>
              </ul>
            </div>
            <div className="bg-slate-700 md:rounded shadow py-1 mb-2 mt-5">
              <h3 className="font-bold text-center text-slate-50 text-xl">
                Trailer
              </h3>
            </div>
            <div>
              {currAnime.trailer != null ? (
                <iframe
                  className="h-[300px] md:h-[600px]"
                  width="100%"
                  src={`https://www.youtube.com/embed/${currAnime.trailer}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                "No Trailer Video Found"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AnimeDetail;
