import { useParams } from "react-router-dom";

const AnimeDetail = () => {
  const { animeId } = useParams();
  return <h1>Anime Detail {animeId}</h1>;
};
export default AnimeDetail;
