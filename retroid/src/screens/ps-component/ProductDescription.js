import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CustomAccordion from './CustomAccordion'; // Import du composant CustomAccordion
import colors from '../colors';
import images from '../../img/GB/FRONT/index';

const ProductDescription = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImages, setSelectedImages] = useState({
      Boutons: images.Boutons.GB_BUTTON_BLACK,
      Pads: images.Pads.GB_PAD_BLACK,
      Coque: images.Coque.GB_SHELL_BLACK,
      Ips: images.Ips.GB_IPS_BLACK,
  });

  const [hoveredColor, setHoveredColor] = useState({ option: '', color: '' });

  useEffect(() => {
      const fetchProductDetails = async () => {
          try {
              const productResponse = await axios.get(`http://localhost:5000/products/${id}`);
              setProduct(productResponse.data);

              const optionsResponse = await axios.get(`http://localhost:5000/products/${id}/options`);
              setOptions(optionsResponse.data);
          } catch (error) {
              console.error("Erreur lors de la récupération des détails du produit:", error);
              setError('Erreur lors de la récupération des détails du produit');
          }
      };

      fetchProductDetails();
  }, [id]);

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
              pink: images.Boutons.GB_BUTTON_PINK,
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
              grey: images.Coque.GB_SHELL_DMG,
              ghost: images.Coque.GB_SHELL_GHOST,
              green: images.Coque.GB_SHELL_GREEN,
              red: images.Coque.GB_SHELL_RED,
              white: images.Coque.GB_SHELL_WHITE,
              yellow: images.Coque.GB_SHELL_YELLOW,
          },
          Ips: {
              black: images.Ips.GB_IPS_BLACK,
              grey: images.Ips.GB_IPS_DMG,
          },
          Pads: {
              black: images.Pads.GB_PAD_BLACK,
              blue: images.Pads.GB_PAD_BLUE,
              clear: images.Pads.GB_PAD_CLEAR,
              green: images.Pads.GB_PAD_GREEN,
              red: images.Pads.GB_PAD_RED,
              pink: images.Pads.GB_PAD_PINK,
              purple: images.Pads.GB_PAD_PURPLE,
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

  const resetImages = () => {
      setSelectedImages({
          Boutons: images.Boutons.GB_BUTTON_BLACK,
          Pads: images.Pads.GB_PAD_BLACK,
          Coque: images.Coque.GB_SHELL_BLACK,
          Ips: images.Ips.GB_IPS_BLACK,
      });
  };

  if (error) {
      return <p className="text-red-500">{error}</p>;
  }

  if (!product) {
      return <p>Chargement...</p>;
  }

  const optionsList = [
      { _id: '1', name: 'Boutons', colors: ['black', 'blue', 'red', 'orange', 'pink', 'dmg', 'grey', 'white', 'clearBlack', 'clearOrange', 'clearGreen', 'clearGlass', 'clearBlue',] },
      { _id: '2', name: 'Coque', colors: ['black', 'blue', 'red', 'yellow', 'clearBlack', 'clearOrange', 'clearGlass', 'clearBlue', 'clearOcean', 'clearRed', 'ghost', 'green', 'grey'] },
      { _id: '3', name: 'Ips', colors: ['black', 'grey'] },
      { _id: '4', name: 'Pads', colors: ['black', 'blue', 'clear', 'green', 'red', 'pink', 'purple', 'yellow'] },
  ];

  return (
    <div className="w-full p-8 bg-white shadow-lg rounded-lg">
      {/* <h1 className="text-4xl font-bold mb-4">PS VITA OLED</h1> */}
      {/* <p className="text-lg mb-4">
        La P VITA OLED offre une expérience de jeu portable inégalée avec son écran vibrant OLED.
      </p> */}
      {/* <p className="text-2xl font-semibold text-green-600 mb-4">A partir de 189€</p> */}
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mb-8">Ajouter au panier</button>

      {/* Ajout de l'accordéon personnalisé */}
      {optionsList.map(option => (
        <CustomAccordion
          key={option._id}
          title={option.name}
          content={
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-2">
                {option.colors.map(colorName => {
                  const color = colors.find(c => c.name.toLowerCase() === colorName.replace(/ /g, '').toLowerCase());
                  return color ? (
                    <div key={color.name} className="relative flex flex-col items-center">
                      <button
                        onClick={() => handleColorClick(option.name, colorName)}
                        onMouseEnter={() => setHoveredColor({ option: option.name, color: color.name })}
                        onMouseLeave={() => setHoveredColor({ option: '', color: '' })}
                        className="text-white px-3 py-3 rounded-full"
                        style={{ backgroundColor: color.value }}
                      />
                      {hoveredColor.option === option.name && hoveredColor.color === color.name && (
                        <div className="absolute bottom-[-30px] bg-gray-700 text-white text-xs rounded py-1 px-2">
                          {color.name}
                        </div>
                      )}
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          }
        />
      ))}

      <CustomAccordion
        title="Livraison"
        content="Livraison gratuite avec Mondial Relay pour toute commande supérieure à 139€."
      />
      <CustomAccordion
        title="Garantie"
        content="Les consoles sont garanties 3 mois avec un support complet en cas de problème."
      />
    </div>
  );
}

export default ProductDescription;
