import { imageURL } from "../constant";
export const getId = (url) => {
  const id = url.split("");
  const number = id.slice(-3).join("").replaceAll("/", "");
  return number;
};

export const getImage = (type, id) => {
  const image = `${imageURL}${type}/${id}.jpg`;
  return image;
};
