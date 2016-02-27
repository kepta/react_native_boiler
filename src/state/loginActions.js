export const LOGGED_IN = 'LOGGED_IN';
export const LOGGING = 'LOGGING';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

import localStorage from '../storage/localStorage';

function removePersistence() {
  localStorage.removeItem('id');
  localStorage.removeItem('pass');
  localStorage.removeItem('token');
}

export function setLogging(user) {
  return {
    type: LOGGING,
    CREDENTIALS: user,
  };
}

export function setLogout() {
  removePersistence();
  return {
    type: LOGGED_OUT,
  };
}

export function setLoggedIn(issues, token) {
  return {
    type: LOGGED_IN,
    issues,
    token,
  };
}

export function setLoginError() {
  removePersistence();
  return {
    type: LOGIN_ERROR,
  };
}
