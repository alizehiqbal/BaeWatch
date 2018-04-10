import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="slider one" />
        <div className="slider two" />
        <div className="slider three" />
        <div className="slider four" />
      </Slider>
    );
  }
}

export default SimpleSlider;
