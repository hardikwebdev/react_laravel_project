import { configureStore } from "@reduxjs/toolkit";

import weSellReducer from "./Slice/weSellSlice";
import homeReducer from "./Slice/homeSlice";


export const store = configureStore({
  reducer: {
    weSell: weSellReducer,
    user: homeReducer,
  },
});


export default store;
