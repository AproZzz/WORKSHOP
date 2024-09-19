import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import colorsList from './colors'; // Importez les couleurs
import { FaTruck, FaBox, FaShoppingBag } from 'react-icons/fa';
import dragCursor from '../img/drag.png'; // Importer l'image pour le curseur
import Banner from './details-component/Banner';  // Importer le composant Banner
import ImageSlider from './ps-component/ProductDescription';  // Importer le slider d'images
import ProductDescription from './ps-component/ProductDescription';  // Importer la fiche description
// import ProductTabs from './deta-component/ProductTabs';
// import CreateType from './options/CreateType'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);
  const [editOptionId, setEditOptionId] = useState(null);
  const [newOptionName, setNewOptionName] = useState('');
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [optionToDelete, setOptionToDelete] = useState(null);
  const [hoveredColorName, setHoveredColorName] = useState({});

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

  const handleEditOption = async () => {
    try {
      await axios.put(`http://localhost:5000/options/${editOptionId}`, { name: newOptionName });
      setNewOptionName('');
      setEditOptionId(null);

      const response = await axios.get(`http://localhost:5000/products/${id}/options`);
      setOptions(response.data);
    } catch (error) {
      console.error('Erreur lors de la modification de l\'option:', error);
    }
  };

  const handleDeleteOption = async () => {
    try {
      await axios.delete(`http://localhost:5000/options/${optionToDelete}`);

      const response = await axios.get(`http://localhost:5000/products/${id}/options`);
      setOptions(response.data);
      closeConfirmPopup();
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'option:', error);
    }
  };

  const getColorName = (colorValue) => {
    const color = colorsList.find(c => c.value === colorValue);
    return color ? color.name : '';
  };

  const openConfirmPopup = (optionId) => {
    setOptionToDelete(optionId);
    setShowConfirmPopup(true);
  };

  const closeConfirmPopup = () => {
    setShowConfirmPopup(false);
    setOptionToDelete(null);
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!product) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="relative">
      
      {/* Bandeau de livraison avec effet de changement de curseur */}
      <div
        className="w-full bg-black text-white p-4 flex items-center justify-center"
        style={{ cursor: `url(${dragCursor}), auto` }} // Change the cursor when hovering
      >
        <FaTruck className="mr-2" size={24} />
        <p className="text-sm font-light">Livraison offerte dès 139€ avec Mondial Relay</p>
      </div>

      {/* Bloc avec le prix et le nom du produit */}
      <div className="w-full bg-gray-900 text-white p-10 flex flex-col justify-end">
        <div className="flex flex-col items-start pl-12 pt-20">
          <p className="text-l" style={{ fontFamily: '"Roboto", Sans-serif', fontWeight: '300' }}>
            À partir de {product.prix} €
          </p>
          <p className="text-5xl font-semibold mt-4 uppercase" style={{ fontFamily: '"Roboto", Sans-serif' }}>
            {product.name}
          </p>
          {/* <button
            onClick={() => window.location.href = '/CreateType'}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Accéder à CreateType
          </button> */}
        </div>
      </div>

      {/* Bandeau sous le contenu */}
      <div className="bg-white p-4 flex items-center justify-end mr-20 text-gray-400">
        <div className="flex items-center space-x-2 pr-5">
          <FaBox size={15} />
          <span className="ml-2 text-sm">Livraison gratuite</span>
        </div>
        <p className=''>|</p>
        <div className="flex items-center space-x-2 pl-5 pr-5">
          <FaShoppingBag size={15} />
          <span className="ml-2 text-sm">À partir de 149€</span>
        </div>
      </div>

      {/* Détails du produit */}
      <div className="p-6 mx-auto bg-gray-100 shadow-md">
        <h2 className="text-2xl font-semibold mt-6">Options</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {options.length > 0 ? (
            options.map(option => (
              <div key={option._id} className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
                {editOptionId === option._id ? (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newOptionName}
                      onChange={(e) => setNewOptionName(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Nouveau nom de l'option"
                    />
                    <button
                      onClick={handleEditOption}
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      Enregistrer
                    </button>
                    <button
                      onClick={() => setEditOptionId(null)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    >
                      Annuler
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <span>{option.name}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setEditOptionId(option._id);
                          setNewOptionName(option.name);
                        }}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => openConfirmPopup(option._id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                )}
                <div className="relative flex space-x-2 mt-2">
                  {option.colors && option.colors.length > 0 ? (
                    option.colors.map(color => (
                      <div
                        key={color}
                        className="relative w-8 h-8 rounded-full cursor-pointer"
                        style={{ backgroundColor: color }}
                        onMouseEnter={() => setHoveredColorName({ [option._id]: getColorName(color) })}
                        onMouseLeave={() => setHoveredColorName({})}
                      >
                        {hoveredColorName[option._id] === getColorName(color) && (
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2">
                            {hoveredColorName[option._id]}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <span>Aucune couleur ajoutée</span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Aucune option disponible pour ce produit.</p>
          )}
        </div>

        {/* Popup de confirmation */}
        {showConfirmPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Confirmer la suppression</h2>
              <p className="mb-4">Êtes-vous sûr de vouloir supprimer cette option ?</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleDeleteOption}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Supprimer
                </button>
                <button
                  onClick={closeConfirmPopup}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default ProductDetails;

