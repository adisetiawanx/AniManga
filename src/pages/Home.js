import { useEffect } from "react";
import AniMangaList from "../components/AniManga/AniMangaList";
import { getAnimeData } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Layout/Header";

const Home = ({ AniMangaData, onSetData }) => {
  const { isLoading, error, sendRequest } = useHttp(getAnimeData);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = Number(searchParams.get("page") || 1);

  useEffect(() => {
    sendRequest(onSetData, page);
  }, [sendRequest, onSetData, page]);

  return (
    <>
      <Header />
      {/* {isLoading && <p>Loading!</p>}
      {error && <p>{error}</p>} */}

      <div className="container mx-auto md:flex">
        <div className="md:flex-auto md:w-[80%]">
          <AniMangaList AniMangaData={AniMangaData} />
          <div style={{ textAlign: "center", margin: "15px" }}>
            <button onClick={() => navigate(`?page=${page + 1}`)}>Next!</button>
          </div>
        </div>
        <aside className="md:flex-auto w-auto md:ml-3">
          <div className="bg-slate-600 rounded shadow py-1">
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
