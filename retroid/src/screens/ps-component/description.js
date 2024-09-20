import React from 'react';

const Description = () => {
  return (
    <div className="w-full bg-gray-100 py-8 px-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">DESCRIPTION</h2>
      <p className="text-gray-600 leading-relaxed">
        Chaque console est minutieusement restaurée pour garantir un fonctionnement parfait, avec un test rigoureux de toutes les pièces. L'écran OLED est systématiquement remplacé par un neuf (bien que non officiel), assurant une qualité d'affichage optimale.
      </p>
      <p className="mt-4 text-gray-600 leading-relaxed">
        En option, vous avez la possibilité de choisir des pièces neuves pour d'autres composants, afin de vous assurer un aspect esthétique proche d'une console neuve.
      </p>
    </div>
  );
};

export default Description;
