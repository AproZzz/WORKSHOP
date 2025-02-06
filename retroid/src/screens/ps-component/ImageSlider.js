import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full md:w-1/2 h-1/3">
      <Slider {...settings}>
        <div>
          <img src="/img/ps-front.jpg" alt="Image 1" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src="/img/ps-back.jpg" alt="Image 2" className="object-cover w-full h-full" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
