import { toast } from "react-toastify";
import { setError, setErrorForReload } from "../redux/errors/handleErrorsAndPayloads";

export const detectError = (error, dispatch, rejectWithValue) => {
  if (error.code === "ERR_NETWORK" || error.code === "ERR_BAD_REQUEST" && error.response?.status === 0) {
    dispatch(setErrorForReload({
      errorCode: 0,
      errorMessage: "Server is unavailable",
    }))
    return rejectWithValue(error);
  }
  if (typeof error === "object" && error['reason']) return toast.error(error['reason'])
  console.log("🚀 ~ file: detectError.js:13 ~ detectError ~ error:", error)
  if (error?.response) {
    if (error.response?.status === 422) {
      if (error.response?.data?.errors) {
        Object.keys(error.response?.data?.errors).map((item) =>
          dispatch(
            setError({
              errorCode: error.response.status ?? error?.response?.data?.status,
              errorMessage: `${item} : ${error.response?.data?.errors[item]}`,
            })
          )
        );
      }
    } else
      dispatch(
        setError({
          errorCode: error.response.status ?? error?.response?.data?.status,
          errorMessage:
            error?.response?.data?.message || error?.response?.data?.status,
        })
      );
  }
  if (rejectWithValue) {
    return rejectWithValue(error);
  }
};

export const spreadObjValuesNotNull = (ob) => {
  if (typeof ob === "object" && ob) {
    const tempObj = {};
    Object.keys(ob).forEach((key) => {
      tempObj[key] = ob[key] ?? "";
    });
    return tempObj;
  } else {
    return ob;
  }
};

//convert search params to opject
export function paramsToObject(entries) {
  const result = {};
  for (const [key, value] of entries) {
    result[key] = value;
  }
  return result;
}

export const mapAlterString = (_array, string) => {
  if (Array.isArray(_array) && _array.length > 0) {
    return _array.map((item) => item[string]);
  } else {
    return string;
  }
};
export const subStringNumber = (stirng, numbers) => {
  if (typeof stirng === "string" && stirng.length > numbers) {
    return stirng.substring(1, numbers) + "...";
  } else {
    return stirng;
  }
};
// handle error leading and server params
function handleLoadingErrorParamsForAsycThunk(state, { meta, payload, type }) {
  const action = type.split("/");
  if (meta?.arg && type.endsWith("/pending")) {
    state.paramsForThunk[action[1]] = meta?.arg;
  }

  if (type.endsWith("/rejected") && payload?.response) {
    state.errorMessages[action[1]] =
      payload?.response?.data?.message ??
      payload?.response?.message ??
      "Something went wrong";
    state.errorCodes[action[1]] =
      payload?.response?.status ?? 500;
  }
  state.errors[action[1]] = type.endsWith("/rejected");
  state.loadings[action[1]] = type.endsWith("/pending");
}
export { handleLoadingErrorParamsForAsycThunk };


export const catchAsync = (fn) => (_, api) => {
  return Promise.resolve(fn(_, api)).catch((error) => {
    return detectError(error, api?.dispatch, api?.rejectWithValue)
  }
  );
};
export const reduxToolKitCaseBuilder = (cases) => {
  return cases.flatMap((el) => [el.pending, el.fulfilled, el.rejected]);
};

