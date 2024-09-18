import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import colorsList from './colors'; // Importez les couleurs

const ProductDetails = () => {
  const { id } = useParams(); // Récupérer l'ID du produit à partir de l'URL
  const [product, setProduct] = useState(null);
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);
  const [editOptionId, setEditOptionId] = useState(null);
  const [newOptionName, setNewOptionName] = useState('');
  const [hoveredColorName, setHoveredColorName] = useState('');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Requête pour obtenir les détails du produit
        const productResponse = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(productResponse.data);

        // Requête pour obtenir les options du produit
        const optionsResponse = await axios.get(`http://localhost:5000/products/${id}/options`);
        setOptions(optionsResponse.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du produit:", error);
        setError('Erreur lors de la récupération des détails du produit');
      }
    };

    fetchProductDetails();
  }, [id]);

  // Fonction pour modifier le nom de l'option
  const handleEditOption = async (optionId) => {
    try {
      await axios.put(`http://localhost:5000/options/${optionId}`, { name: newOptionName });
      setNewOptionName('');
      setEditOptionId(null);
      // Mettre à jour la liste des options après modification
      const response = await axios.get(`http://localhost:5000/products/${id}/options`);
      setOptions(response.data);
    } catch (error) {
      console.error('Erreur lors de la modification de l\'option:', error);
    }
  };

  // Fonction pour supprimer l'option
  const handleDeleteOption = async (optionId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette option ?')) {
      try {
        await axios.delete(`http://localhost:5000/options/${optionId}`);
        // Mettre à jour la liste des options après suppression
        const response = await axios.get(`http://localhost:5000/products/${id}/options`);
        setOptions(response.data);
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'option:', error);
      }
    }
  };

  // Trouver le nom de la couleur
  const getColorName = (colorValue) => {
    const color = colorsList.find(c => c.value === colorValue);
    return color ? color.name : '';
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!product) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg relative">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Détails du produit</h1>
      <p className="text-lg font-medium text-gray-700"><strong>Nom :</strong> {product.name}</p>
      <p className="text-lg font-medium text-gray-700"><strong>Prix :</strong> {product.prix} €</p>
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
                    onClick={() => handleEditOption(option._id)}
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
                      onClick={() => handleDeleteOption(option._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              )}
              <div className="relative flex space-x-2">
                {option.colors && option.colors.length > 0 ? (
                  option.colors.map(color => (
                    <div
                      key={color}
                      className="relative w-8 h-8 rounded-full"
                      style={{ backgroundColor: color }}
                      onMouseEnter={() => setHoveredColorName(getColorName(color))}
                      onMouseLeave={() => setHoveredColorName('')}
                    >
                      {hoveredColorName && (
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2">
                          {hoveredColorName}
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
    </div>
  );
};

export default ProductDetails;
