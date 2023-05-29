import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import classes from "../../styles/Header/header.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
const HeaderNavigation = () => {
  const data = useSelector((state) => state.favourite.favourite).length;
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.nav_item}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div>
          <ul className={classes.list}>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"films"}>Films</NavLink>
            </li>
            <li>
              <NavLink to={"people?page=1"}>People</NavLink>
            </li>
            <li>
              <NavLink to={"planets?page=1"}>Planets</NavLink>
            </li>
            <li>
              <NavLink to={"starships?page=1"}>StarShips</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className={classes.nav_block}>
        <NavLink className={classes.nav_block_favourite} to={"favourite"}>
          <span>{data}</span>
          <AiOutlineHeart />
        </NavLink>
      </div>
    </header>
  );
};

export default HeaderNavigation;
