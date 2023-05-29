import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "../../styles/Main/ItemList.module.scss";
const Favourite = () => {
  const favData = useSelector((state) => state.favourite.favourite);
  return (
    <Fragment>
      <h1>Favourite</h1>
      <div>
        <ul className={classes.list}>
          {favData &&
            favData.map(({ id, link, personInfo: { name, image } }) => {
              return (
                <li className={classes.item} key={id}>
                  <NavLink to={link}>
                    <img src={image} alt="" />
                    <p>{name}</p>
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Favourite;
