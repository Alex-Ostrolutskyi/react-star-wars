import React, { useState, useEffect, Fragment } from "react";
import { SWAPPI_FILMS } from "../../constant";
import { GetAPI } from "../../utils/GetAPI";
import { getId } from "../../helpers";
import { getImage } from "../../helpers";
import { FILMS } from "../../constant";
import FilmsList from "./FilmsList";
import { Triangle } from "react-loader-spinner";
import classes from "../../styles/loader.module.scss";
import Error from "../error/Error";
const FilmsPage = () => {
  const [movies, setMovies] = useState(null);
  const [errorApi, setErrorApi] = useState(false);
  useEffect(() => {
    const getData = async (url) => {
      const body = await GetAPI(url);

      if (body) {
        const data = body.results.map((element) => {
          const id = getId(element.url);
          const image = getImage(FILMS, id);
          return {
            ...element,
            image,
            id,
          };
        });
        setMovies(data);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    };
    getData(SWAPPI_FILMS);
  }, []);
  return (
    <div>
      {errorApi ? (
        <Error />
      ) : movies ? (
        <Fragment>
          <h1>Films</h1>
          {movies && <FilmsList movies={movies} />}
        </Fragment>
      ) : (
        <Triangle color="#192719" wrapperClass={classes.loader} />
      )}
    </div>
  );
};

export default FilmsPage;
