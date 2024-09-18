import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate pour la navigation
import CreateProductOption from './options/CreateProductOption';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [prix, setPrix] = useState('');
    const navigate = useNavigate(); // Initialisation de la fonction navigate

    const handleSubmit = (e) => {
        e.preventDefault();

        // Créer le produit avec seulement le nom et le prix
        const productData = {
            name: name,
            prix: prix,
        };

        axios.post('http://localhost:5000/products', productData)
            .then((response) => {
                console.log('Produit créé:', response.data);
                // Afficher une notification de succès
                toast.success('Produit créé avec succès!');
                // Réinitialiser les champs du formulaire
                setName('');
                setPrix('');
            })
            .catch((error) => {
                console.error('Erreur lors de la création du produit:', error.response ? error.response.data : error.message);
                // Afficher une notification d'erreur
                toast.error('Erreur lors de la création du produit');
            });
    };

    const handleNavigate = () => {
        navigate('/create-product-option'); // Navigation vers la page CreateProductOption
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Créer un produit</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom du produit</label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="prix" className="block text-sm font-medium text-gray-700">Prix</label>
                    <input
                        type="text"
                        id="prix"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Créer
                </button>
            </form>
            <button
                onClick={handleNavigate}
                className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
                Créer une option de produit
            </button>
            <ToastContainer />
        </div>
    );
};

export default CreateProduct;
