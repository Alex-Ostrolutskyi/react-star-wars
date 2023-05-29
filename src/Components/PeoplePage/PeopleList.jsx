import React from "react";
import classes from "../../styles/Main/ItemList.module.scss";
import { NavLink } from "react-router-dom";
import { PEOPLE } from "../../constant";
const PeopleList = ({ peopleData }) => {
  return (
    <ul className={classes.list}>
      {peopleData.map(({ name, id, image }) => {
        return (
          <li key={id} className={classes.item}>
            <NavLink to={`/${PEOPLE}/${id}`}>
              <img src={image} alt={`${name} photo`} />
              <p>{name}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default PeopleList;
