import React, { useState } from 'react';

const images = [
  {
    src: '/img/ps.jpg', // Chemin à partir du dossier public
    alt: 'NDS Lite',
    title: 'NDS LITE',
    subtitle: 'De nouveaux horizons',
    button: 'Découvrir'
  },
  {
    src: '/img/ds.jpg', // Chemin à partir du dossier public
    alt: 'PS Vita OLED',
    title: 'PS VITA OLED',
    subtitle: 'De nouvelles possibilités',
    button: 'Découvrir'
  }
];

export const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div
              className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">{image.title}</h1>
                <p className="text-lg mt-2">{image.subtitle}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">{image.button}</button>
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
