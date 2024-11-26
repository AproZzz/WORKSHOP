import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Footer2 = () => {
  return (
    <div className="bg-black text-white mt-12">
      {/* Footer Section */}
      <footer className="bg-black w-full">
        <div className="flex justify-center space-x-8 text-sm">
          <a href="#" className="hover:underline">Mentions légales</a>
          <a href="#" className="hover:underline">Conditions générales de vente</a>
          <a href="#" className="hover:underline">Politique de confidentialité</a>
        </div>
        <div className="mt-4 text-center">
          <p>Tous droits réservés - RETROMETROID 2024</p>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">TikTok</a>
          <a href="#" className="hover:text-gray-400">YouTube</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer2;
