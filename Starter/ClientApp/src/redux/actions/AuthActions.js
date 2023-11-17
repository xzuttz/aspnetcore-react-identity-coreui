import { ActionTypes } from "./Constants";

export const setAuth = (isAuthenticated) => {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.AUTH_USER,
      payload: {
        isAuth: isAuthenticated,
      },
    });
  };
};
