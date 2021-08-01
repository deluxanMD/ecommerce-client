import axios from "axios";
import { getServer } from "../../utils";
import setAuthToken from "../../utils/setAuthToken";

import { TYPES } from "./types";

// set a user
export const setCurrentUser = (user) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${getServer}/auth`);
    dispatch({
      type: TYPES.SET_CURRENT_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.AUTH_ERROR,
    });
  }
};

// register user
export const register = (user) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  await axios
    .post(`${getServer}/users`, user, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: TYPES.SUCCESSFUL_REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => {
      const error = err.response.data.errors;
      console.error(err);
      if (error) {
        dispatch({
          type: TYPES.ERRORS,
          payload: error,
        });
      } else {
        dispatch({
          type: TYPES.FAILURE_REGISTER,
        });
      }
    });
};
