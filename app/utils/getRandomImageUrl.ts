// utils/getRandomImageUrl.ts

import imageData from "../data/imgUrl.json"

export const getRandomImageUrl = (): string => {
  const randomIndex = Math.floor(Math.random() * imageData.images.length);
  return imageData.images[randomIndex].url;
};