const AniMangaList = ({ title, year, url, image, episodes, status, score }) => {
  return (
    <li
      style={{
        width: "300px",
        margin: "10px",
        border: "1px solid black",
        textAlign: "center",
      }}
    >
      <p>
        <strong>{title}</strong>
      </p>
      <p>{year}</p>
      <p>
        <img style={{ margin: "0 auto" }} src={image} alt={title} />
      </p>
      <p>Episode : {episodes}</p>
      <p>Status : {status}</p>
      <p>Score : {score}</p>
    </li>
  );
};

export default AniMangaList;
