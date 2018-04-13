import * as LikesApiUtil from "../util/likes_util";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  users
});

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const fetchLikes = () => dispatch =>
  UserApiUtil.fetchLikes().then(likes => dispatch(receiveAllLikes(likes)));

export const deleteLike = id => dispatch =>
  UserApiUtil.deleteLike(id).then(like => dispatch(receiveLike(like)));

export const likeSomeone = like => dispatch =>
  UserApiUtil.likeSomeone(like).then(like => dispatch(receiveLike(like)));
