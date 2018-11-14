import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import Onboarding from "./onboarding";
const mapStateToProps = state => {
  return {
    user: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
