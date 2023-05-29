import React, { useEffect, useState, Fragment } from "react";
import { SWAPPI_PLANETS, STARSHIPS } from "../../constant/index";
import { GetAPI } from "../../utils/GetAPI";
import { getId, getImage } from "../../helpers";
import Error from "../error/Error";
import Paggination from "../UI/Paggination";
import StarShipList from "./StarShipList";
import { Triangle } from "react-loader-spinner";
import classes from "../../styles/loader.module.scss";
const StarShipsPage = () => {
  const [starShipsData, setstarShipsData] = useState(null);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(false);
  const [errorApi, setErrorApi] = useState(false);
  const [currentPage, setCurrentPage] = useState("1");

  const getData = async (url) => {
    const body = await GetAPI(url);
    if (body) {
      const data = body.results.map(({ name, url }) => {
        const id = getId(url);
        const image = getImage(STARSHIPS, id);
        return {
          name,
          id,
          image,
        };
      });
      setIsFirst(!!body.previous);
      setIsLast(!!body.next);
      setstarShipsData(data);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getData(SWAPPI_PLANETS + currentPage);
  }, [currentPage, isFirst, isLast]);
  const changeHandler = (event) => {
    setCurrentPage(event);
  };

  return (
    <div>
      {errorApi ? (
        <Error />
      ) : starShipsData ? (
        <Fragment>
          <h1>STARSHIPS</h1>
          <div>
            {starShipsData && <StarShipList starShipsData={starShipsData} />}
          </div>
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

export default StarShipsPage;
