import { connect } from "react-redux";
import LikedUsers from "./liked_users";
import { deleteLike } from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteLike: likeId => dispatch(deleteLike(likeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikedUsers);
