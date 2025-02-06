import React, { useState, useEffect } from 'react';
import axios from 'axios';
import colors from '../colors'; // Importer la liste des couleurs
import { toast, ToastContainer } from 'react-toastify'; // Importer toast et ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importer les styles CSS pour react-toastify

const AddColorForm = () => {
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectAll, setSelectAll] = useState(false); // État pour la case "Sélectionner tout"

  // Récupérer les produits existants
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    };

    fetchProducts();
  }, []);

  // Récupérer les options pour le produit sélectionné
  useEffect(() => {
    if (selectedProduct) {
      const fetchOptions = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/options?productId=${selectedProduct}`);
          setOptions(response.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des options:', error);
        }
      };

      fetchOptions();
    }
  }, [selectedProduct]);

  // Mettre à jour les couleurs sélectionnées lorsque l'état "Sélectionner tout" change
  useEffect(() => {
    if (selectAll) {
      setSelectedColors(colors.map(color => color.value));
    } else {
      setSelectedColors([]);
    }
  }, [selectAll]);

  // Fonction pour ajouter des couleurs
  const handleAddColors = async (e) => {
    e.preventDefault();

    const colorData = {
      optionId: selectedOption,
      colors: selectedColors,
    };

    try {
      await axios.post('http://localhost:5000/colors', colorData); // Assurez-vous que cette route existe
      toast.success('Couleurs ajoutées avec succès !'); // Afficher une notification de succès
      setSelectedOption('');
      setSelectedColors([]);
      setSelectAll(false); // Réinitialiser la case "Sélectionner tout"
    } catch (error) {
      console.error('Erreur lors de l\'ajout des couleurs:', error);
      toast.error('Erreur lors de l\'ajout des couleurs'); // Afficher une notification d'erreur
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Ajouter des couleurs à une option</h2>

      <form onSubmit={handleAddColors} className="space-y-4">
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700">Produit</label>
          <select
            id="product"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            required
          >
            <option value="">Sélectionnez un produit</option>
            {products.map(product => (
              <option key={product._id} value={product._id}>{product.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="option" className="block text-sm font-medium text-gray-700">Option</label>
          <select
            id="option"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            required
          >
            <option value="">Sélectionnez une option</option>
            {options.map(option => (
              <option key={option._id} value={option._id}>{option.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Couleurs</label>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={(e) => setSelectAll(e.target.checked)}
              className="mr-2"
            />
            <span>Sélectionner tout</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {colors.map(color => (
              <label key={color.value} className="flex items-center">
                <input
                  type="checkbox"
                  value={color.value}
                  checked={selectedColors.includes(color.value)}
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    setSelectedColors(prevColors =>
                      checked ? [...prevColors, value] : prevColors.filter(c => c !== value)
                    );
                    // Désélectionner "Sélectionner tout" si une couleur est décochée
                    if (checked === false) {
                      setSelectAll(false);
                    }
                  }}
                  className="mr-2"
                />
                <span className="w-6 h-6" style={{ backgroundColor: color.value, border: '1px solid black' }}></span>
                <span className="ml-2">{color.name}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Ajouter les couleurs
        </button>
      </form>

      <ToastContainer /> {/* Ce composant affichera les notifications */}
    </div>
  );
};

export default AddColorForm;