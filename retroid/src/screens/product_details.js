import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Utiliser useParams pour obtenir l'ID du produit

const ProductDetails = () => {
  const { id } = useParams(); // Récupérer l'ID du produit à partir de l'URL
  const [product, setProduct] = useState(null);
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log('Fetching details for product ID:', id); // Debugging

        // Requête pour obtenir les détails du produit
        const productResponse = await axios.get(`http://localhost:5000/products/${id}`);
        console.log('Product response:', productResponse.data); // Debugging
        setProduct(productResponse.data);

        // Requête pour obtenir les options du produit
        const optionsResponse = await axios.get(`http://localhost:5000/products/${id}/options`);
        console.log('Options response:', optionsResponse.data); // Debugging
        setOptions(optionsResponse.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du produit:", error);
        setError('Erreur lors de la récupération des détails du produit');
      }
    };

    fetchProductDetails();
  }, [id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!product) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Détails du produit</h1>
      <p className="text-lg font-medium text-gray-700"><strong>Nom :</strong> {product.name}</p>
      <p className="text-lg font-medium text-gray-700"><strong>Prix :</strong> {product.prix} €</p>
      <h2 className="text-2xl font-semibold mt-6">Options</h2>
      {options.length > 0 ? (
        <ul className="space-y-2 mt-4">
          {options.map(option => (
            <li key={option._id} className="bg-gray-100 p-2 rounded-md">
              {option.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune option disponible pour ce produit.</p>
      )}
    </div>
  );
};

export default ProductDetails;