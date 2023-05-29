import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetAPI } from "../../utils/GetAPI";
import { SWAPPI_PERSON, characters, PEOPLE } from "../../constant";
import { getImage } from "../../helpers/index";
import PersonFilms from "./PersonFilms/PersonFilms";
import classes from "../../styles/person.module.scss";
import FavouriteButton from "../UI/FavouriteButton";
import Details from "../UI/Details";
const Person = () => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState();
  const [personPhoto, setPersonPhoto] = useState();
  const [personName, setPersonName] = useState();
  const [personFilms, setPersonFilms] = useState();

  useEffect(() => {
    const getData = async (url) => {
      const data = await GetAPI(url);
      const image = getImage(characters, id);
      if (data) {
        setPersonInfo([
          { title: "Gender", data: data.gender },
          { title: "Mass", data: data.mass },
          { title: "Height", data: data.height },
          { title: "EyeColor", data: data.eye_color },
          { title: "HairColor", data: data.hair_color },
        ]);
        setPersonPhoto(image);
        setPersonName(data.name);
        setPersonFilms(data.films);
      } else {
        return;
      }
    };
    getData(`${SWAPPI_PERSON}/${id}`);
  }, [id]);
  return (
    <div className={classes.person_block}>
      <div className={classes.person_block_photo}>
        <img src={personPhoto} alt="" />
      </div>
      <div className={classes.person_block_right}>
        <div className={classes.person_block_right_name}>
          <p>{personName}</p>
          {personName && personPhoto && (
            <FavouriteButton
              personInfo={{
                id: id,
                name: personName,
                image: personPhoto,
                type: PEOPLE,
              }}
            />
          )}
        </div>
        <div className={classes.person_block_right_detail}>
          <h2>Details</h2>
          <ul>{personInfo && <Details details={personInfo} />}</ul>
        </div>
        <div className={classes.person_block_right_films}>
          <h2>Films</h2>
          {personFilms && <PersonFilms films={personFilms} />}
        </div>
      </div>
    </div>
  );
};

export default Person;
