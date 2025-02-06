// src/details-component/Banner.js
import React from 'react';

const Banner = ({ title, subtitle }) => {
  return (
    <div className="relative w-full h-64 bg-black text-white flex items-center">
      {/* Conteneur du texte aligné à gauche */}
      <div className="max-w-screen-lg ml-16 px-8 text-left">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
