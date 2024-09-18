// src/screens/ProductDetails.js
import React from 'react';
import Banner from './details-component/Banner';  // Importer le composant Banner
import ImageSlider from './ps-component/ImageSlider';  // Importer le slider d'images
import ProductDescription from './ps-component/ProductDescription';  // Importer la fiche description
import CustomTabs from './details-component/CustomTabs';  // Importer les onglets personnalisés

const ProductDetails = () => {
  return (
    <div>
      {/* Utilisation du composant Banner */}
      <Banner title="PS VITA OLED" subtitle="Découvrez la nouvelle PS VITA OLED à partir de 189€" />

      <div className="p-8">
        {/* Mise en page en flex pour afficher les deux composants côte à côte */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Composant ImageSlider à gauche */}
          <ImageSlider />

          {/* Composant ProductDescription à droite */}
          <ProductDescription />
        </div>

        {/* Ajouter les onglets personnalisés en dessous */}
        <div className="mt-8">
          <CustomTabs />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
