import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [prix, setPrix] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Créer le produit avec seulement le nom et le prix
        const productData = {
            name: name,
            prix: prix,
        };

        axios.post('http://localhost:5000/Products', productData)
            .then((response) => {
                console.log('Produit créé:', response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la création du produit:', error.response ? error.response.data : error.message);
            });

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
        </div>
    );
};

export default CreateProduct;
