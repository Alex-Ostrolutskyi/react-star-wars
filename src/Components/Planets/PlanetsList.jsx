import React from "react";
import { NavLink } from "react-router-dom";
import { PLANETS } from "../../constant/index";
import image from "../../images/no_Image.png";
import classes from "../../styles/Main/ItemList.module.scss";
const PlanetsList = ({ planet }) => {
  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = image;
    event.currentTarget.className = "error";
  };
  return (
    <ul className={classes.list}>
      {planet.map(({ name, image, id }) => {
        return (
          <li className={classes.item} key={id}>
            <NavLink to={`/${PLANETS}/${id}`}>
              <img
                src={image}
                onError={imageOnErrorHandler}
                alt={`${name} photo`}
              />
              <p>{name}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default PlanetsList;
