import Onboarding1 from "./onboarding_container";
import Onboarding2 from "./onboarding2container";
import React from "react";

class OnboardingBoss extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
  }

  render() {
    if (
      !this.state.first_name &&
      !this.state.last_name &&
      !this.state.curr_lang &&
      !this.state.seeking_lang
    ) {
      return <Onboarding1 />;
    } else if (
      this.state.first_name &&
      this.state.last_name &&
      !this.state.curr_lang
    ) {
      return <Onboarding2 />;
    }
  }
}

export default OnboardingBoss;
