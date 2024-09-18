import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les produits depuis le serveur
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);  // Mettre à jour l'état avec les produits récupérés
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
      setError("Erreur lors de la récupération des produits");
    }
  };

  // Fonction pour supprimer un produit
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du produit:", error);
      setError("Erreur lors de la suppression du produit");
    }
  };

  // Utiliser useEffect pour récupérer les produits au montage du composant
  useEffect(() => {
    fetchProducts();
  }, []);  // Le tableau vide [] signifie que ce hook s'exécute une seule fois après le montage

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liste des produits</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {products.length === 0 ? (
          <li>Aucun produit trouvé.</li>
        ) : (
          products.map((product) => (
            <li key={product._id} className="mb-4">
              <p><strong>Nom :</strong> {product.name}</p>
              <p><strong>Prix :</strong> {product.prix} €</p>
              <button 
                onClick={() => deleteProduct(product._id)} 
                className="bg-red-500 text-white p-2 rounded mt-2"
              >
                Supprimer
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ProductList;
