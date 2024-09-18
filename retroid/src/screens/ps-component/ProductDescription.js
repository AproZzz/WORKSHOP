import React from 'react';

const ProductDescription = () => {
  return (
    <div className="w-full md:w-1/2 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4">PS VITA OLED</h1>
      <p className="text-lg mb-4">
        La PS VITA OLED offre une expérience de jeu portable inégalée avec son écran vibrant OLED.
      </p>
      <p className="text-2xl font-semibold text-green-600 mb-4">A partir de 189€</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Ajouter au panier</button>
    </div>
  );
}

export default ProductDescription;
