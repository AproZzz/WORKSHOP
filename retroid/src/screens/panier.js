import React from 'react';
import Header from './ps-component/Header';  
import ImageSlider from './ps-component/ImageSlider'; 
import ProductDescription from './ps-component/ProductDescription'; 
import CustomTabs from './details-component/CustomTabs';  // Importer les onglets personnalisés


const Panier = () => {
  return (
    <div>
      <Header />

      <div className="p-8">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <ImageSlider />

          <ProductDescription />
        </div>
        <div className="mt-8">
          <CustomTabs />
        </div>
      </div>
    </div>
  );
}

export default Panier;
