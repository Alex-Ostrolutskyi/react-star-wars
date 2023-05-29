import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAPI } from "../../utils/GetAPI";
import { SWAPPI_FILMS, FILMS } from "../../constant";
import { getImage } from "../../helpers";
import classes from "../../styles/film.module.scss";
import FavouriteButton from "../UI/FavouriteButton";
const Film = () => {
  const [movie, setMovie] = useState();
  const [filmImage, setFilmImage] = useState();
  const [filmName, setFilmName] = useState();
  const { filmId } = useParams();
  useEffect(() => {
    const getData = async (url) => {
      const body = await GetAPI(url);

      if (body) {
        const image = getImage(FILMS, filmId);
        setMovie([
          {
            title: "Opening crawl",
            data: body.opening_crawl,
          },
          {
            title: "Director",
            data: body.director,
          },
          {
            title: "Producer",
            data: body.producer,
          },
          {
            title: "Release date",
            data: body.release_date,
          },
        ]);
        setFilmImage(image);
        setFilmName(`Episode ${body.episode_id} - ${body.title}`);
      }
    };
    getData(`${SWAPPI_FILMS}/${filmId}`);
  }, [filmId]);
  return (
    <div className={classes.film}>
      {movie && (
        <Fragment>
          <div className={classes.film_left}>
            <img src={filmImage} alt="film image" />
          </div>
          <div className={classes.film_right}>
            <div className={classes.film_right_name}>
              <p>{filmName}</p>
              {filmName && filmImage && (
                <FavouriteButton
                  personInfo={{
                    id: filmId,
                    name: filmName,
                    image: filmImage,
                    type: FILMS,
                  }}
                />
              )}
            </div>
            <h2>Details</h2>
            <ul>
              {movie &&
                movie.map(({ title, data }, index) => {
                  return (
                    <li key={index}>
                      <p className={classes.para}>{title}</p>
                      <p>{data}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Film;
