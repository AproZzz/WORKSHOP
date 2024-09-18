import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carousel1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    arrows: false,
  };

  return (
    <div className="w-screen h-screen relative">
      <Slider {...settings}>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/img/ds.jpg" alt="Console DS" className="object-cover w-full h-full" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/img/ps.jpg" alt="Console PS" className="object-cover w-full h-full" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel1;
