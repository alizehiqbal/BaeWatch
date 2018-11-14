import { connect } from "react-redux";
import React from "react";
import { updateUser } from "../../actions/user_actions";
import ProfileEdit from "./edit_my_page";

const mapStateToProps = state => {
  return {
    id: state.session.currentUser.id,
    first_name: state.session.currentUser.first_name,
    last_name: state.session.currentUser.last_name,
    img_url: state.session.currentUser.img_url,
    city: state.session.currentUser.city,
    description: state.session.currentUser.description,
    curr_lang: state.session.currentUser.curr_lang,
    seeking_lang: state.session.currentUser.seeking_lang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
