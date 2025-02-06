import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Importer toast et ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importer les styles CSS pour react-toastify
import { Link } from 'react-router-dom'; // Importer Link pour la navigation

const CreateProductOption = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [optionName, setOptionName] = useState('');
    const [error, setError] = useState(null);

    // Récupérer les produits existants
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error) {
                setError('Erreur lors de la récupération des produits');
                console.error("Erreur lors de la récupération des produits:", error);
            }
        };

        fetchProducts();
    }, []);

    // Fonction pour créer une option pour un produit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const optionData = {
            productId: selectedProduct,
            name: optionName
        };

        try {
            await axios.post('http://localhost:5000/options', optionData);
            toast.success('Option créée avec succès !'); // Afficher une notification de succès
            setOptionName('');
            setSelectedProduct('');
        } catch (error) {
            setError('Erreur lors de la création de l\'option');
            console.error("Erreur lors de la création de l'option:", error);
            toast.error('Erreur lors de la création de l\'option'); // Afficher une notification d'erreur
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Créer une option pour un produit</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700">Produit</label>
                    <select
                        id="product"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    <label htmlFor="optionName" className="block text-sm font-medium text-gray-700">Nom de l'option</label>
                    <input
                        type="text"
                        id="optionName"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={optionName}
                        onChange={(e) => setOptionName(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Créer l'option
                </button>
            </form>
            
            {/* Bouton pour aller à la page Ajouter Couleur */}
            <Link to="/add-color">
                <button
                    className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Ajouter Couleur
                </button>
            </Link>

            <ToastContainer /> {/* Ce composant affichera les notifications */}
        </div>
    );
};

export default CreateProductOption;
