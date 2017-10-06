import axios from 'axios';

import { EXAMPLE_AUTH, USER_LOGIN, USER_LOGOUT } from './types';

const ROOT_URL = 'http://localhost:8000';

export function getToken(values, callback) {
  const request = axios.post(`${ROOT_URL}/rest-auth/login/`, values);
  request.then(() => callback());

  return {
    type: USER_LOGIN,
    payload: request
  }
}

export function resetToken() {
  return {
    type: USER_LOGOUT
  }
}

export function getExampleAuth(token) {
  const request = axios.get(
    `${ROOT_URL}/example/`,
    { 'headers': { 'Authorization': `Token ${token}` }}
  );

  return {
    type: EXAMPLE_AUTH,
    payload: request
  }
}
