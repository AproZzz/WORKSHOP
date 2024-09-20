import React, { useState, useEffect } from 'react';

const images = [
  {
    src: '/img/ds.jpg',
    alt: 'NDS Lite',
    title: 'NDS LITE',
    subtitle: 'De nouveaux horizons',
    button: 'Découvrir',
    textColor: 'text-black', // Texte en noir
  },
  {
    src: '/img/ps.jpg',
    alt: 'PS Vita OLED',
    title: 'PS VITA OLED',
    subtitle: 'De nouvelles possibilités',
    button: 'Découvrir',
    textColor: 'text-white', // Texte en blanc
  }
];

export const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[740px] mx-auto overflow-hidden bg-cover bg-bottom" >
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-screen flex-shrink-0 relative">
            <img src={image.src} alt={image.alt} className="w-full h-[740px] object-cover object-center" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center text-center p-4">
              <div className="flex flex-col justify-center items-center mt-24">
                <p className={`text-xl mt-2 ${image.textColor}`}>
                  {image.subtitle}
                </p>

                <h1 className={`text-6xl font-bold ${image.textColor}`}>
                  {image.title}
                </h1>

                <button className="bg-blue-500 text-white py-2 px-12 rounded-full mt-5">
                  {image.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel1;
