// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
import customToast from "../../hooks/customToast";

const initialState = {
  errorMessage: null,
  errorCode: null,
  models: {},
};

export const handleErrorSlice = createSlice({
  name: "handleErrors",
  initialState,
  reducers: {
    // globally dynamic action to set error
    setError: (state, action) => {
      console.log("🚀 ~ file: handleErrorsAndPayloads.js:17 ~ action:", action)
      state.errorMessage = action.payload.errorMessage;
      state.errorCode = action.payload.errorCode;
      // set hole project error message/ when API is unavailable/invalid/not ok /not supported
      // customToast.error(action.payload.errorMessage);
      customToast.error(action.payload.errorMessage || "Something went wrong");
    },
    resetError: (state, action) => {
      state.errorMessage = null;
      state.errorCode = null;
    },
    // dispatch reload site if server is unavailable
    setErrorForReload: (state, action) => {
      state.models["reload"] = true;
    },
  },
});

export const { setError, resetError, setErrorForReload } = handleErrorSlice.actions;

export default handleErrorSlice.reducer;
