import * as UserApiUtil from "../util/user_api_util";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUsers = () => dispatch =>
  UserApiUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));

export const fetchUser = id => dispatch =>
  UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));

export const createUser = user => dispatch =>
  UserApiUtil.createUser(user).then(user => dispatch(receiveUser(user)));

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
