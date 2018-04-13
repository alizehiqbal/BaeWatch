import { connect } from "react-redux";
import LikedUsers from "./liked_users";
import { deleteLike } from "../../actions/like_actions";

const mapStateToProps = state => ({
  user: state.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  deleteLike: likeId => dispatch(deleteLike(likeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikedUsers);
