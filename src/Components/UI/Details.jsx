import React from "react";
import classes from "../../styles/Details.module.scss";
const Details = ({ details }) => {
  return details.map(({ title, data }, index) => {
    return (
      <li className={classes.item} key={index}>
        <p className={classes.title}>{title}</p>
        <p className={classes.data}>{data}</p>
      </li>
    );
  });
};

export default Details;
