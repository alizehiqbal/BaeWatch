import NavBarContainer from "./navbar_container";
import SearchingFor from "./searching_for";

const Splash = () => (
  <section>
    <NavBarContainer />
    <div>
      I'm a <SearchingFor /> looking to pair program with a <SearchingFor />
    </div>;
  </section>
);

export default Splash;
