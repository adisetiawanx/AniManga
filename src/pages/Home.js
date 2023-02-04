import { useEffect } from "react";
import AniMangaList from "../components/AniManga/AniMangaList";
import { getAnimeData, getTopAnimeData } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useSearchParams } from "react-router-dom";

import PaginationButton from "../components/UI/PaginationButton";
import TopAnimeList from "../components/TopAnime/TopAnimeList";

const Home = ({
  animeData,
  onSetAnimeData,
  topAnimeData,
  onSetTopAnimeData,
}) => {
  const { isLoading: isLoadingAnime, sendRequest: sendRequestAnime } =
    useHttp(getAnimeData);
  const { isLoading: isLoadingTopAnime, sendRequest: sendRequestTopAnime } =
    useHttp(getTopAnimeData);

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  useEffect(() => {
    const send = async () => {
      sendRequestAnime(onSetAnimeData, { page });
      sendRequestTopAnime(onSetTopAnimeData);
    };
    send();
  }, [
    sendRequestAnime,
    onSetAnimeData,
    page,
    sendRequestTopAnime,
    onSetTopAnimeData,
  ]);

  return (
    <>
      <div className="container md:mx-auto md:flex">
        <div className="md:flex-auto md:w-[80%]">
          <AniMangaList isLoading={isLoadingAnime} AniMangaData={animeData} />
          <PaginationButton page={page} />
        </div>
        <aside className="md:flex-auto md:w-[20%] mt-10 md:mt-0 md:ml-3">
          <div className="bg-slate-600 rounded shadow py-1 mx-2">
            <h3 className="font-bold text-center text-slate-50 text-xl">
              Popular Anime
            </h3>
          </div>
          <TopAnimeList
            isLoading={isLoadingTopAnime}
            topAnimes={topAnimeData}
          />
        </aside>
      </div>
    </>
  );
};

export default Home;
