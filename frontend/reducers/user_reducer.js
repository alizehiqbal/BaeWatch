import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../actions.user_actions";

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default UserReducer;
