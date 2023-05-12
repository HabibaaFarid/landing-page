import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./hospitalInfo";

export default configureStore({
  reducer: {
    hospitalInfo: infoReducer,
  },
});
