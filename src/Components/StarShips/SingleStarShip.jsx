import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetAPI } from "../../utils/GetAPI";
import { SWAPPI_STARSHIP, STARSHIPS } from "../../constant/index";
import { getImage } from "../../helpers/index";
import PersonFilms from "../PeoplePage/PersonFilms/PersonFilms";
import classes from "../../styles/person.module.scss";
import image from "../../images/no_Image.png";
import FavouriteButton from "../UI/FavouriteButton";
import Details from "../UI/Details";
import { Triangle } from "react-loader-spinner";
import styles from "../../styles/loader.module.scss";
const SingleStarShip = () => {
  const { starShipId } = useParams();
  const [starShipInfo, setstarShipInfo] = useState(null);
  const [starShipPhoto, setstarShipPhoto] = useState();
  const [starShipName, setstarShipName] = useState();
  const [starShipFilms, setStarShipFilms] = useState();
  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = image;
    event.currentTarget.className = "error";
  };
  useEffect(() => {
    const getData = async (url) => {
      const data = await GetAPI(url);
      const image = getImage(STARSHIPS, starShipId);
      if (data) {
        setstarShipInfo([
          { title: "model", data: data.model },
          { title: "starship_class", data: data.starship_class },
          { title: "length", data: data.length },
          { title: "manufacturer", data: data.manufacturer },
          { title: "cost_in_credits", data: data.cost_in_credits },
          { title: "crew", data: data.crew },
          { title: "passengers", data: data.passengers },
        ]);
        setstarShipPhoto(image);
        setstarShipName(data.name);
        setStarShipFilms(data.films);
      } else {
        return;
      }
    };
    getData(`${SWAPPI_STARSHIP}/${starShipId}`);
  }, [starShipId]);

  return (
    <div className={classes.person_block}>
      <div className={classes.person_block_photo}>
        <img
          src={starShipPhoto}
          onError={imageOnErrorHandler}
          alt="planet image"
        />
      </div>
      <div className={classes.person_block_right}>
        <div className={classes.person_block_right_name}>
          <p>{starShipName}</p>
          {starShipInfo && starShipName && (
            <FavouriteButton
              personInfo={{
                id: starShipId,
                name: starShipName,
                image: starShipPhoto,
                type: STARSHIPS,
              }}
            />
          )}
        </div>
        <div className={classes.person_block_right_detail}>
          <h2>Details</h2>
          <ul>{starShipInfo && <Details details={starShipInfo} />}</ul>
        </div>
        <div className={classes.person_block_right_films}>
          <h2>Films</h2>
          {starShipFilms && <PersonFilms films={starShipFilms} />}
        </div>
      </div>
    </div>
  );
};

export default SingleStarShip;
