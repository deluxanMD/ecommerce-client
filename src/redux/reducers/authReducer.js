import { TYPES } from "../actions/types";
import { isEmpty } from "lodash";

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: {},
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload,
      };
    case TYPES.SUCCESSFUL_REGISTER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case TYPES.FAILURE_REGISTER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
