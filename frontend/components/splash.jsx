import React from "react";
import NavBarContainer from "./navbar_container";
import SearchingFor from "./searching_for";
import SimpleSlider from "./backroundslides";

const Splash = () => (
  <section>
    <NavBarContainer />
    <SimpleSlider />
    <div>
      I'm a <SearchingFor /> looking to pair program with a <SearchingFor />
    </div>
  </section>
);

export default Splash;
