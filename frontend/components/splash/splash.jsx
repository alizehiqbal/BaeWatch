import React from "react";

// import SearchingFor from "./searching_for";
// import SimpleSlider from "./backroundslides";
// <SimpleSlider />
// I'm a <SearchingFor /> looking to pair program with a <SearchingFor />

const Splash = () => (
  <section className="splash-container">
    <h1 className="pairing-deserves"> Pairing Deserves Better </h1>
    <p className="bob-ross">
      Of course he's a happy little stone, cause we don't have any other kind.
      Water's like me. It's laaazy ... Boy, it always looks for the easiest way
      to do things There's nothing wrong with having a tree as a friend. I
      started painting as a hobby when I was little. I didn't know I had any
      talent. I believe talent is just a pursued interest. Anybody can do what I
      do. See. We take the corner of the brush and let it play back-and-forth.{" "}
    </p>
    <div className="nick">
      <form className="formy-form">
        <div className="first">
          <p className="what-is-you">I'm a ...</p>
          <select className="options">
            <option>Rubyist</option>
            <option>JavaScriptor</option>
            <option>C+(plus some!)</option>
            <option>Pythonista</option>
            <option>Haskellawag</option>
            <option>Other</option>
          </select>
        </div>
        <div className="two">
          <p className="seeking">looking for a...</p>
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
      <button className="continue-button">Continue</button>
    </div>
  </section>
);

export default Splash;
