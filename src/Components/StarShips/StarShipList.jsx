import React from "react";
import classes from "../../styles/Main/ItemList.module.scss";
import { NavLink } from "react-router-dom";
import image from "../../images/no_Image.png";
import { STARSHIPS } from "../../constant/index";
const StarShipList = ({ starShipsData }) => {
  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = image;
    event.currentTarget.className = "error";
  };
  return (
    <ul className={classes.list}>
      {starShipsData.map(({ name, id, image }) => {
        return (
          <li key={id} className={classes.item}>
            <NavLink to={`/${STARSHIPS}/${id}`}>
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

export default StarShipList;
