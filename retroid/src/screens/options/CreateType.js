import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateType = () => {
  const [types, setTypes] = useState([]);
  const [newType, setNewType] = useState('');

  // Récupérer les types depuis la base de données au montage du composant
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/types');
        setTypes(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des types', error);
      }
    };

    fetchTypes();
  }, []);

  // Gérer la soumission du formulaire
  const handleAddType = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/types', { name: newType });
      setTypes([...types, response.data]);
      setNewType('');
    } catch (error) {
      console.error('Erreur lors de la création du type', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Créer un nouveau type</h1>
      
      <form onSubmit={handleAddType} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Nom du type</label>
          <input
            type="text"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Entrez le nom du type"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Ajouter le type
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Types existants</h2>
        <ul className="space-y-2">
          {types.map((type) => (
            <li key={type._id} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
              <span>{type.name}</span>
              <span className="text-gray-500">ID: {type._id}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateType;
