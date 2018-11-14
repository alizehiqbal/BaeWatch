import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// import SearchingFor from "./searching_for";
// import SimpleSlider from "./backroundslides";
// <SimpleSlider />
// I'm a <SearchingFor /> looking to pair program with a <SearchingFor />

const Splash = () => (
  <Fragment>
    <div className="splash-bg-container" />
    <section className="splash-container">
      <h1 className="pairing-deserves"> Pairing Deserves Better </h1>
      <p className="bob-ross">
        Of course he's a happy little stone, cause we don't have any other kind.
        Water's like me. It's laaazy ... Boy, it always looks for the easiest
        way to do things There's nothing wrong with having a tree as a friend. I
        started painting as a hobby when I was little. I didn't know I had any
        talent. I believe talent is just a pursued interest. Anybody can do what
        I do. See. We take the corner of the brush and let it play
        back-and-forth.{" "}
      </p>
      <div className="nick">
        <form className="formy-form">
          <div className="first">
            <p className="what-is-you">I'm a</p>
          </div>
          <div className="second">
            <select className="options">
              <option>Rubyist</option>
              <option>JavaScriptor</option>
              <option>C+(plus some!)</option>
              <option>Pythonista</option>
              <option>Haskellawag</option>
              <option>Other</option>
            </select>
          </div>
          <div className="third">
            <p className="seeking">looking for a</p>
          </div>
          <div className="fourth">
            <select className="options">
              <option>Rubyist</option>
              <option>JavaScriptor</option>
              <option>C+(plus some!)</option>
              <option>Pythonista</option>
              <option>Haskellawag</option>
              <option>Other</option>
            </select>
          </div>
        </form>
        <Link to="/signup" className="continue">
          Continue
        </Link>
      </div>
    </section>
  </Fragment>
);

export default Splash;
