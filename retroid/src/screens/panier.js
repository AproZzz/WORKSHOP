import React from 'react';
import Header from './ps-component/Header';  
import ImageSlider from './ps-component/ImageSlider'; 
import ProductDescription from './ps-component/ProductDescription'; 
import CustomTabs from './details-component/CustomTabs';  // Importer les onglets personnalisés
import ImageCarousel from './ps-component/Imagecarousel';
import Description from './ps-component/description';
import RetroGaming from './ps-component/RetroGaming';
import ProductSection from './ps-component/ProductSection';
import Footer2 from './acc_component/footer2';


const Panier = () => {
  return (
    <div>
      <Header />

      <div >
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <ImageSlider />

          <ProductDescription />
        </div>
        <div className="mt-8">
          <CustomTabs />
        </div>
          <ImageCarousel />
          <Description />
          <RetroGaming />
          <ProductSection />
          <Footer2 />
        
      </div>
    </div>
  );
}

export default Panier;
