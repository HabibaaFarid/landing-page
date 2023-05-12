import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "hospitalInfo",
  initialState: {
    info: [],
  },
  reducers: {
    add_info: (state, action) => {
      state.info = [...action.payload];
    },
  },
});
export const get_info = (state) => {
  return state.hospitalInfo.shipment_no;
};

export const { add_info } = infoSlice.actions;
export default infoSlice.reducer;
