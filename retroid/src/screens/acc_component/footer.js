import React from 'react';
import Slider from 'react-slick'; // Assurez-vous que react-slick et slick-carousel sont installés
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Footer = () => {
  const settings = {
    dots: true,
    infinite: true, // Répétition infinie
    speed: 500,
    slidesToShow: 3, // 3 slides visibles en même temps
    centerMode: true, // Pour centrer le slide actif
    centerPadding: "0", // Pour retirer les marges sur les côtés
    slidesToScroll: 1,
    autoplay: false, // Activation de l'autoplay
    autoplaySpeed: 5000, // Autoplay toutes les 5 secondes
  };

  return (
    <div className="bg-black text-white">
      <div className="text-center py-8">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
          ÉDITIONS LIMITÉES
        </h2>
        <p className="text-sm md:text-lg">Créés pour être unique</p>
      </div>

      {/* Carousel Section */}
      <div className="w-screen">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="relative transition-transform transform hover:scale-105">
            <img
              src="/img/BTTF-BG-1024x1024.jpg"
              alt="Retour vers le Futur"
              className="object-cover w-full h-96 md:h-[500px] lg:h-[600px] transition-all duration-500 ease-in-out opacity-80 hover:opacity-100"
            />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-2xl md:text-4xl font-bold">RETRO VERS LE FUTUR</h3>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Découvrir
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative transition-transform transform hover:scale-105">
            <img
              src="/img/TRA-BG-1024x1024.jpg"
              alt="Transformers"
              className="object-cover w-full h-96 md:h-[500px] lg:h-[600px] transition-all duration-500 ease-in-out opacity-80 hover:opacity-100"
            />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-2xl md:text-4xl font-bold">TRANSFORMERS</h3>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Découvrir
              </button>
            </div>
          </div>
          </Slider>
          </div>

      {/* Footer Section */}
      <footer className="bg-black py-8">
        <div className="flex justify-center space-x-8 text-sm">
          <a href="#" className="hover:underline">Mentions légales</a>
          <a href="#" className="hover:underline">Conditions générales de vente</a>
          <a href="#" className="hover:underline">Politique de confidentialité</a>
        </div>
        <div className="mt-4 text-center">
          <p>Tous droits réservés - RETROMETROID 2024</p>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">TikTok</a>
          <a href="#" className="hover:text-gray-400">YouTube</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;