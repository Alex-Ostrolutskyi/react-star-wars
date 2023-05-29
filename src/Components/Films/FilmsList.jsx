import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../../styles/Main/ItemList.module.scss";
const FILMSList = ({ movies }) => {
  return (
    <ul className={classes.list}>
      {movies
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(({ image, episode_id, title, id }) => {
          return (
            <li className={classes.item} key={episode_id}>
              <NavLink to={`${id}`}>
                <img src={image} alt={`${title} episode ${episode_id}`} />
                <p>{`Episode ${episode_id} ${title} `}</p>
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default FILMSList;
