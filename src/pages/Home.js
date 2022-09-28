import { useEffect } from "react";
import AniManga from "../components/AniManga/AniManga";
import { getAnimeData } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useNavigate, useSearchParams } from "react-router-dom";

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
      {isLoading && <p>Loading!</p>}
      {error && <p>{error}</p>}
      <AniManga AniMangaData={AniMangaData} />
      <div style={{ textAlign: "center", margin: "15px" }}>
        <button onClick={() => navigate(`?page=${page + 1}`)}>Next!</button>
      </div>
    </>
  );
};

export default Home;
