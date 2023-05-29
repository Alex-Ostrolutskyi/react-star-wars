import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import classes from "../../styles/FavouriteButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { favourite } from "../../store/store";
const FavouriteButton = ({ personInfo: { name, id, image, type } }) => {
  const dispatch = useDispatch();
  const [isFavor, setIsFavor] = useState();
  const storeData = useSelector((state) => state.favourite.favourite);
  const isFavoritePerson = storeData.find(
    (item) => item.id === id && item.type === type
  );
  useEffect(() => {
    isFavoritePerson ? setIsFavor(true) : setIsFavor(false);
  }, [isFavoritePerson, name]);

  const dispatchHandler = () => {
    if (isFavor) {
      setIsFavor(false);
      dispatch(
        favourite.removeFromFavourite({
          name: name,
        })
      );
    } else {
      setIsFavor(true);
      dispatch(
        favourite.addToFavourite({
          id: id,
          personInfo: {
            name: name,
            image: image,
          },
          link: `/${type}/${id}`,
          type: type,
        })
      );
    }
  };
  return (
    <div
      className={
        isFavor ? `${classes.favourite} ${classes.active}` : classes.favourite
      }
      onClick={dispatchHandler}
    >
      <button>
        <AiOutlineHeart />
      </button>
      <p>Favorite</p>
    </div>
  );
};

export default FavouriteButton;
