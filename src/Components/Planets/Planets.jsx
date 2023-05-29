import React, { useState, useEffect, Fragment } from "react";
import { PLANETS, SWAPPI_PLANETS } from "../../constant";
import { GetAPI } from "../../utils/GetAPI";
import { getId, getImage } from "../../helpers";
import Error from "../error/Error";
import PlanetsList from "./PlanetsList";
import Paggination from "../UI/Paggination";
import { Triangle } from "react-loader-spinner";
import classes from "../../styles/loader.module.scss";
const Planet = () => {
  const [planet, setPlanet] = useState(null);
  const [errorApi, setErrorApi] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(false);
  const [currentPage, setCurrentPage] = useState("1");
  useEffect(() => {
    const getData = async (url) => {
      const body = await GetAPI(url);
      if (body) {
        const data = body.results.map(({ name, url }) => {
          const id = getId(url);
          const image = getImage(PLANETS, id);
          return {
            name,
            id,
            image,
          };
        });
        setIsFirst(!!body.previous);
        setIsLast(!!body.next);
        setPlanet(data);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    };
    getData(SWAPPI_PLANETS + currentPage);
  }, [isFirst, isLast, currentPage]);

  const changeHandler = (event) => {
    setCurrentPage(event);
  };
  return (
    <div>
      <h1>Planets</h1>
      {errorApi ? (
        <Error />
      ) : planet ? (
        <Fragment>
          <div>{planet && <PlanetsList planet={planet} />}</div>
          <Paggination
            isFirst={isFirst}
            isLast={isLast}
            onCurrentPage={changeHandler}
          />
        </Fragment>
      ) : (
        <Triangle color="#192719" wrapperClass={classes.loader} />
      )}
    </div>
  );
};

export default Planet;
