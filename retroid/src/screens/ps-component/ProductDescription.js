import React from 'react';
import CustomAccordion from './CustomAccordion'; // Import du composant CustomAccordion

const ProductDescription = () => {
  return (
    <div className="w-full md:w-1/2 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4">PS VITA OLED</h1>
      <p className="text-lg mb-4">
        La PS VITA OLED offre une expérience de jeu portable inégalée avec son écran vibrant OLED.
      </p>
      <p className="text-2xl font-semibold text-green-600 mb-4">A partir de 189€</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mb-8">Ajouter au panier</button>
      
      {/* Ajout de l'accordéon personnalisé */}
      <CustomAccordion
        title="Caractéristiques"
        content="Écran OLED, 64 Go de stockage, processeur quad-core, connectivité Wi-Fi."
      />
      <CustomAccordion
        title="Livraison"
        content="Livraison gratuite avec Mondial Relay pour toute commande supérieure à 139€."
      />
      <CustomAccordion
        title="Garantie"
        content="Les consoles sont garanties 3 mois avec un support complet en cas de problème."
      />
    </div>
  );
}

export default ProductDescription;
