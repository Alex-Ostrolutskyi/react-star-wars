import React, { useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import classes from "../../styles/helpers/Pagination.module.scss";
import { useSearchParams } from "react-router-dom";
const Paggination = ({ isFirst, isLast, onCurrentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    onCurrentPage(searchParams.get("page"));
  }, [isLast, isFirst, searchParams]);
  const nextPageHandler = () => {
    setSearchParams({ page: +searchParams.get("page") + 1 });
  };
  const prevPageHandler = () => {
    setSearchParams({ page: +searchParams.get("page") - 1 });
  };
  return (
    <div className={classes.planets_arrows}>
      <button
        className={classes.planets_arrows_left}
        disabled={!isFirst}
        onClick={prevPageHandler}
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        className={classes.planets_arrows_right}
        onClick={nextPageHandler}
        disabled={!isLast}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Paggination;
