import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [editProductId, setEditProductId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPrix, setEditPrix] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      setError('Erreur lors de la récupération des produits');
      console.error("Erreur lors de la récupération des produits:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      setError('Erreur lors de la suppression du produit');
      console.error("Erreur lors de la suppression du produit:", error);
    }
  };

  const startEdit = (product) => {
    setEditProductId(product._id);
    setEditName(product.name);
    setEditPrix(product.prix);
  };

  const updateProduct = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/products/${editProductId}`, {
        name: editName,
        prix: editPrix
      });
      setProducts(products.map(product => product._id === editProductId ? response.data : product));
      setEditProductId(null);
      setEditName('');
      setEditPrix('');
    } catch (error) {
      setError('Erreur lors de la mise à jour du produit');
      console.error("Erreur lors de la mise à jour du produit:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Liste des produits</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ul className="space-y-4">
        {products.length === 0 ? (
          <li className="text-center text-gray-500">Aucun produit trouvé.</li>
        ) : (
          products.map((product) => (
            <li key={product._id} className="bg-gray-100 p-4 rounded-md shadow-sm flex justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-700">
                  <strong>Nom :</strong> {product.name}
                </p>
                <p className="text-lg font-medium text-gray-700">
                  <strong>Prix :</strong> {product.prix} €
                </p>
              </div>
              <div className="flex items-center">
                <Link to={`/products/${product._id}`} className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                  Voir Détails
                </Link>
                <button
                  onClick={() => startEdit(product)}
                  className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Modifier
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      
      {editProductId && (
        <div className="mt-6 bg-gray-100 p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Modifier le produit</h2>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Nom du produit"
            className="mb-2 p-2 border border-gray-300 rounded-md w-full"
          />
          <input
            type="text"
            value={editPrix}
            onChange={(e) => setEditPrix(e.target.value)}
            placeholder="Prix du produit"
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <button
            onClick={updateProduct}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Mettre à jour
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
