/* this file is meant to handle all of the actions which interact with auth  */

import { LOG_IN, LOG_OUT } from '../actionTypes/auth';

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
