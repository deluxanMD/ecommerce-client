import { TYPES } from "./types";

export const setCurrentUser = (user) => ({
  type: TYPES.SET_CURRENT_USER,
  payload: user,
});
