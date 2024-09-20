import React from 'react';
import Slider from 'react-slick'; // Pour le carrousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importation des images depuis le dossier src/img_psp
import slide1 from '../../img_psp/slide1.jpg';
import slide2 from '../../img_psp/slide2.jpg';
import slide3 from '../../img_psp/slide3.jpg';
import slide4 from '../../img_psp/slide4.jpg'; // Assurez-vous que le chemin est correct

const ImageCarousel = () => {
  const settings = {
    dots: true, // Affiche les points de navigation
    infinite: true, // Défilement infini
    speed: 500, // Vitesse de transition
    slidesToShow: 3, // Nombre d'images visibles en même temps
    slidesToScroll: 1, // Défiler une image à la fois
    autoplay: true, // Autoplay activé
    autoplaySpeed: 3000, // Intervalle de 3 secondes
    centerMode: true, // Centrer l'image active
    centerPadding: '0', // Pas de padding
    responsive: [
      {
        breakpoint: 1024, // Pour les grands écrans
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Pour les écrans moyens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Pour les petits écrans
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-8 px-4 bg-white">
      <Slider {...settings}>
        <div className="px-2">
          <img
            src={slide1} // Image 1 importée
            alt="Dragon Ball Z"
            className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-lg"
          />
        </div>
        <div className="px-2">
          <img
            src={slide2} // Image 2 importée
            alt="Final Fantasy"
            className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-lg"
          />
        </div>
        <div className="px-2">
          <img
            src={slide3} // Image 3 importée
            alt="Rayman Origins"
            className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-lg"
          />
        </div>
        <div className="px-2">
          <img
            src={slide4} // Image 4 importée
            alt="Call of Duty"
            className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
