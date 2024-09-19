import React from 'react';
import Slider from 'react-slick'; // Pour le carrousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importation des images depuis le dossier src/img_psp
import slide5 from '../../img_psp/slide5.webp';
import slide7 from '../../img_psp/slide7.webp';
import slide6 from '../../img_psp/slide6.webp';
import slide8 from '../../img_psp/slide8.jpg'

const RetroGaming = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 py-12">
      {/* Section Rétrogaming */}
      <div className="bg-black text-white py-8 px-6 rounded-lg">
        <h2 className="text-lg font-semibold">Allez plus loin</h2>
        <h1 className="text-4xl font-bold">RÉTROGAMING</h1>
      </div>

      {/* Grid pour Extension de Mémoire et Émulateurs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Extension de Mémoire */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">EXTENSION DE MÉMOIRE</h2>
          <p className="text-gray-600 leading-relaxed">
            Pour installer des jeux sur la console, vous aurez besoin d’une carte micro SD de 256 Go ou 512 Go ainsi que de son adaptateur. En augmentant ainsi la capacité de stockage de votre console, vous pourrez importer de nombreux contenus, améliorant votre expérience de jeu rétro sur un écran OLED et vous permettant de rejouer à vos jeux préférés de différentes plateformes.
          </p>
          <img
            src={slide8} // Remplace par le chemin de ton image
            alt="Metroid Image"
            className="mt-4 w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Émulateurs */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">ÉMULATEURS</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Grâce à l'extension de 256Go ou 512Go, il sera possible de lancer des émulateurs tels que RetroArch ou Adrenaline et de profiter des classiques de la Game Boy, Game Boy Advance, Super Nintendo, Mega Drive, PSP, PS1 et même VITA sur l’écran OLED de votre PS Vita.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            La console pourra, évidemment, lire les jeux officiels physiques via le lecteur de cartouche de la PS Vita.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            *La console est vendue sans jeu.
          </p>

          {/* Carrousel */}
          <Slider {...sliderSettings}>
            <div>
              <img
                src={slide5} // Remplace par le chemin de ton image
                alt="Console Image 1"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src={slide7} // Remplace par le chemin de ton image
                alt="Console Image 2"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src={slide6} // Remplace par le chemin de ton image
                alt="Console Image 3"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RetroGaming;
