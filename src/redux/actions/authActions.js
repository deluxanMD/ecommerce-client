import axios from "axios";

import { TYPES } from "./types";

export const setCurrentUser = (user) => ({
  type: TYPES.SET_CURRENT_USER,
  payload: user,
});

export const register = (user) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post("http:localhost:5000/api/users", user, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: TYPES.SUCCESSFUL_REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: TYPES.FAILURE_REGISTER,
        payload: err.response.data.errors,
      });
    });
};
