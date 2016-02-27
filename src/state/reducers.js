import { combineReducers } from 'redux';
import {
    LOGGED_IN,
    LOGGED_OUT,
    LOGGING,
    LOGIN_ERROR,
} from './loginActions';

const initialState = {
  STATUS: LOGGED_OUT,
  ID: null,
  PASS: null,
  TOKEN: null,
  issues: null,
};

function login(state=initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        STATUS: action.type,
        issues: action.issues,
        TOKEN: action.token,
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        STATUS: action.type,
      });
    case LOGGING:
      return Object.assign({}, state, {
        STATUS: action.type,
        ID: action.id,
        PASS: action.pass,
        TOKEN: action.token,
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        STATUS: action.type,
      });
    default:
      return state;
  }
}

export default combineReducers({ login });
