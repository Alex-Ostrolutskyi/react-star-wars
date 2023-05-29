import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  favourite: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite(state, actions) {
      const personId = actions.payload.id;
      const typeId = actions.payload.type;
      const isExist = state.favourite.find(
        ({ id, type }) => id === personId && type === typeId
      );
      if (!isExist) {
        state.favourite.push({
          id: actions.payload.id,
          personInfo: {
            name: actions.payload.personInfo.name,
            image: actions.payload.personInfo.image,
          },
          link: actions.payload.link,
          type: actions.payload.type,
        });
      }
    },
    removeFromFavourite(state, actions) {
      state.favourite = state.favourite.filter(
        (item) => item.personInfo.name !== actions.payload.name
      );
    },
  },
});
export const favourite = favouriteSlice.actions;
export const store = configureStore({
  reducer: {
    favourite: favouriteSlice.reducer,
  },
});
