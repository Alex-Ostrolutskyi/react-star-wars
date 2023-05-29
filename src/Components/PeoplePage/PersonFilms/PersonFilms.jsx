import React from "react";
import { getAPIALL } from "../../../utils/GetAPI";
import { useState, useEffect } from "react";
import classes from "../../../styles/Details.module.scss";
const PersonFilms = ({ films }) => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const getData = async (url) => {
      const movie = await getAPIALL(url);
      setMovies(movie);
    };
    getData(films);
  }, []);
  return (
    <ul>
      {movies &&
        movies
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }, index) => {
            return (
              <li className={classes.item} key={index}>
                <p className={classes.title}>Episode {episode_id}</p>
                <p className={classes.data}>{title}</p>
              </li>
            );
          })}
    </ul>
  );
};

export default PersonFilms;
