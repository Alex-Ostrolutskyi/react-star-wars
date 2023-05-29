import React, { useEffect, useState, Fragment } from "react";
import { SWAPPI_PEOPLE, characters } from "../../constant/index";
import { GetAPI } from "../../utils/GetAPI";
import { getId, getImage } from "../../helpers";
import PeopleList from "./PeopleList";
import Error from "../error/Error";
import Paggination from "../UI/Paggination";
import { Triangle } from "react-loader-spinner";
import classes from "../../styles/loader.module.scss";
const PeoplePage = () => {
  const [peopleData, setPeopleData] = useState(null);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(false);
  const [errorApi, setErrorApi] = useState(false);
  const [currentPage, setCurrentPage] = useState("1");

  const getData = async (url) => {
    const body = await GetAPI(url);
    if (body) {
      const data = body.results.map(({ name, url }) => {
        const id = getId(url);
        const image = getImage(characters, id);
        return {
          name,
          id,
          image,
        };
      });
      setIsFirst(!!body.previous);
      setIsLast(!!body.next);
      setPeopleData(data);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getData(SWAPPI_PEOPLE + currentPage);
  }, [currentPage, isFirst, isLast]);

  const changeHandler = (event) => {
    setCurrentPage(event);
  };
  return (
    <div>
      {errorApi ? (
        <Error />
      ) : peopleData ? (
        <Fragment>
          <h1>People</h1>
          <div>{peopleData && <PeopleList peopleData={peopleData} />}</div>
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

export default PeoplePage;
