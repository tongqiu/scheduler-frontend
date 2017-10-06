import { USER_LOGIN, USER_LOGOUT } from '../actions/types';

export default function(state={}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.payload.data.key
      }
    case USER_LOGOUT:
      return {
        token: ''
      }
    case 'persist/REHYDRATE':
      return {
        token: action.payload.user.token
      }
    default:
      return state;
  }
}
