import { TYPES } from "../actions/types";
import { isEmpty } from "lodash";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
