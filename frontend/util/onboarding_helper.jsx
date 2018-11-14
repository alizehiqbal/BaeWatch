export default currentUser => {
  if (!currentUser) {
    return false;
  } else if (
    currentUser.first_name &&
    currentUser.last_name &&
    currentUser.curr_lang &&
    currentUser.seeking_lang
  ) {
    return true;
  }
};
