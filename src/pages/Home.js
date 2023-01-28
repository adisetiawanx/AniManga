import { useEffect } from "react";
import AniMangaList from "../components/AniManga/AniMangaList";
import { getAnimeData } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useSearchParams } from "react-router-dom";

import PaginationButton from "../components/UI/PaginationButton";

const Home = ({ AniMangaData, onSetData }) => {
  const { isLoading, sendRequest } = useHttp(getAnimeData);
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  useEffect(() => {
    sendRequest(onSetData, { page });
  }, [sendRequest, onSetData, page]);

  return (
    <>
      <div className="container md:mx-auto md:flex">
        <div className="md:flex-auto md:w-[80%]">
          <AniMangaList isLoading={isLoading} AniMangaData={AniMangaData} />
          <PaginationButton page={page} />
        </div>
        <aside className="md:flex-auto w-auto mt-10 md:mt-0 md:ml-3">
          <div className="bg-slate-600 rounded shadow py-1 mx-2">
            <h3 className="font-bold text-center text-slate-50 text-xl">
              Popular Anime
            </h3>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Home;
