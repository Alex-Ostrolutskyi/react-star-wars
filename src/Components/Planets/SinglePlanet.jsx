import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAPI } from "../../utils/GetAPI";
import { SWAPPI_PLANET, PLANETS } from "../../constant";
import { getImage } from "../../helpers";
import PersonFilms from "../PeoplePage/PersonFilms/PersonFilms";
import classes from "../../styles/person.module.scss";
import image from "../../images/no_Image.png";
import FavouriteButton from "../UI/FavouriteButton";
import Details from "../UI/Details";
const SinglePlanet = () => {
  const { planetId } = useParams();

  const [planetInfo, setPlanetInfo] = useState();
  const [planetName, setPlanetName] = useState();
  const [planetFilms, setPlanetFilms] = useState();
  const [planetImage, setPlanetImage] = useState();

  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = image;
    event.currentTarget.className = "error";
  };
  useEffect(() => {
    const getData = async (url) => {
      const body = await GetAPI(url);
      const image = getImage(PLANETS, planetId);

      if (body) {
        setPlanetInfo([
          {
            title: "Rotation period ",
            data: body.rotation_period,
          },
          {
            title: "Diameter",
            data: body.diameter,
          },
          {
            title: "Population",
            data: body.population,
          },
          {
            title: "Gravity",
            data: body.gravity,
          },
          {
            title: "Climate",
            data: body.climate,
          },
          {
            title: "Terrain",
            data: body.terrain,
          },
        ]);
        setPlanetName(body.name);
        setPlanetFilms(body.films);
        setPlanetImage(image);
      } else {
        return;
      }
    };
    getData(`${SWAPPI_PLANET}/${planetId}`);
  }, [planetId]);
  return (
    <div className={classes.person_block}>
      <div className={classes.person_block_photo}>
        <img
          src={planetImage}
          onError={imageOnErrorHandler}
          alt="planet image"
        />
      </div>
      <div className={classes.person_block_right}>
        <div className={classes.person_block_right_name}>
          <p>{planetName}</p>
          {planetInfo && planetName && (
            <FavouriteButton
              personInfo={{
                id: planetId,
                name: planetName,
                image: planetImage,
                type: PLANETS,
              }}
            />
          )}
        </div>
        <div className={classes.person_block_right_detail}>
          <h2>Details</h2>
          <ul>{planetInfo && <Details details={planetInfo} />}</ul>
        </div>
        <div className={classes.person_block_right_films}>
          <h2>Films</h2>
          {planetFilms && <PersonFilms films={planetFilms} />}
        </div>
      </div>
    </div>
  );
};

export default SinglePlanet;
