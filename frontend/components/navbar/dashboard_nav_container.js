import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import DashboardNavBar from "./dashboard_nav";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavBar);
