import { TYPES } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: {},
  errors: [],
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
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
    case TYPES.ERRORS:
      return {
        ...state,
        isAuthenticated: false,
        errors: payload,
      };
    case TYPES.AUTH_ERROR:
      localStorage.removeItem("toekn");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
