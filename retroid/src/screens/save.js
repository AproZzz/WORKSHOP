import React, { useState } from 'react';
import images from '../img/GB/FRONT/index'; // Assurez-vous que le chemin est correct

const ProductDetails = () => {
  const [selectedImages, setSelectedImages] = useState({
    Pads: null,
    Coque: null,
    Ips: null,
    Boutons: null,
  });

  const handleColorClick = (category, color) => {
    const imageMapping = {
      Boutons: {
        black: images.Boutons.GB_BUTTON_BLACK,
        blue: images.Boutons.GB_BUTTON_BLUE,
        clearBlack: images.Boutons.GB_BUTTON_CLEAR_BLACK,
        clearBlue: images.Boutons.GB_BUTTON_CLEAR_BLUE,
        clearGlass: images.Boutons.GB_BUTTON_CLEAR_GLASS,
        clearGreen: images.Boutons.GB_BUTTON_CLEAR_GREEN,
        clearOrange: images.Boutons.GB_BUTTON_CLEAR_ORANGE,
        dmg: images.Boutons.GB_BUTTON_DMG,
        grey: images.Boutons.GB_BUTTON_GREY,
        orange: images.Boutons.GB_BUTTON_ORANGE,
        red: images.Boutons.GB_BUTTON_RED,
        rose: images.Boutons.GB_BUTTON_ROSE,
        white: images.Boutons.GB_BUTTON_WHITE,
      },
      Coque: {
        black: images.Coque.GB_SHELL_BLACK,
        blue: images.Coque.GB_SHELL_BLUE,
        clearBlack: images.Coque.GB_SHELL_CLEAR_BLACK,
        clearBlue: images.Coque.GB_SHELL_CLEAR_BLUE,
        clearOcean: images.Coque.GB_SHELL_CLEAR_OCEAN,
        clearGlass: images.Coque.GB_SHELL_CLEAR_GLASS,
        clearOrange: images.Coque.GB_SHELL_CLEAR_ORANGE,
        clearRed: images.Coque.GB_SHELL_CLEAR_RED,
        dmg: images.Coque.GB_SHELL_DMG,
        ghost: images.Coque.GB_SHELL_GHOST,
        green: images.Coque.GB_SHELL_GREEN,
        red: images.Coque.GB_SHELL_RED,
        white: images.Coque.GB_SHELL_WHITE,
        yellow: images.Coque.GB_SHELL_YELLOW,
      },
      Ips: {
        black: images.Ips.GB_IPS_BLACK,
        dmg: images.Ips.GB_IPS_DMG,
      },
      Pads: {
        black: images.Pads.GB_PAD_BLACK,
        blue: images.Pads.GB_PAD_BLUE,
        clear: images.Pads.GB_PAD_CLEAR,
        green: images.Pads.GB_PAD_GREEN,
        red: images.Pads.GB_PAD_RED,
        rose: images.Pads.GB_PAD_ROSE,
        violet: images.Pads.GB_PAD_VIOLET,
        yellow: images.Pads.GB_PAD_YELLOW,
      },
    };

    if (imageMapping[category] && imageMapping[category][color]) {
      setSelectedImages((prevState) => ({
        ...prevState,
        [category]: imageMapping[category][color],
      }));
    }
  };

  const options = [
    { _id: '1', name: 'Boutons', colors: ['black', 'blue', 'red', 'orange', 'clearBlue'] },
    { _id: '2', name: 'Coque', colors: ['black', 'blue', 'clearRed', 'yellow'] },
    { _id: '3', name: 'Ips', colors: ['black', 'dmg'] },
    { _id: '4', name: 'Pads', colors: ['black', 'blue', 'clear', 'green', 'red', 'rose', 'violet', 'yellow'] },
  ];

  return (
    <div>
      {/* Options et boutons */}
      {options.map(option => (
        <div key={option._id} className="option-container">
          <h3>{option.name}</h3>
          {option.colors.map(color => (
            <button
              key={color}
              onClick={() => handleColorClick(option.name, color)}
              className={`bg-${color}-500 text-white m-1`}
            >
              Afficher l'image {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      ))}

      {/* Affichage des images superposées */}
      <div className="image-display relative">
        {selectedImages.Coque && (
          <img
            src={selectedImages.Coque}
            alt="Coque sélectionnée"
            className="absolute top-0 left-0 w-full h-full object-contain"
            style={{ zIndex: 0 }} // Coque en bas
          />
        )}
        {Object.keys(selectedImages).map((category, index) => (
          selectedImages[category] && category !== 'Coque' && (
            <img
              key={category}
              src={selectedImages[category]}
              alt={`${category} sélectionné`}
              className="absolute top-0 left-0 w-full h-full object-contain"
              style={{ zIndex: index + 1 }} // Les autres éléments au-dessus
            />
          )
        ))}
      </div>

      <style jsx>{`
        .image-display {
          position: relative;
          width: 400px; /* Ajustez la largeur selon vos besoins */
          height: 400px; /* Ajustez la hauteur selon vos besoins */
          border: 1px solid #ccc; /* Ajoutez une bordure pour délimiter la zone d'affichage */
          overflow: hidden; /* Masquer les débordements */
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;
