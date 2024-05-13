// ** Reducers Imports
import auth from "./pagesSlices/authSlice";
import model from "./layoutSlices/modelSlice";

import error from "./errors/handleErrorsAndPayloads";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  error,
  auth,
  model
});

export default rootReducer;
