import { connect } from "react-redux";
import React from "react";
import Profile from "./my_page";

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
