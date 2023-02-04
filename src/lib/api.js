const aniMangaUrl = "https://api.jikan.moe/v4";

export const getAnimeData = async ({ page }) => {
  const respone = await fetch(`${aniMangaUrl}/anime?page=${page}`);

  if (!respone.ok) {
    throw new Error("Something went wrong!");
  }

  const { data } = await respone.json();

  return data;
};

export const getAnimeDataById = async ({ id }) => {
  const respone = await fetch(`${aniMangaUrl}/anime/${id}`);

  if (!respone.ok) {
    throw new Error("Something went wrong!");
  }

  const { data } = await respone.json();

  return data;
};

export const getTopAnimeData = async () => {
  const respone = await fetch(`${aniMangaUrl}/top/anime?limit=10`);

  if (!respone.ok) {
    throw new Error("Something went wrong!");
  }

  const { data } = await respone.json();

  return data;
};
