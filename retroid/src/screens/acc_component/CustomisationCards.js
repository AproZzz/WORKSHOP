import React from "react";

const CustomisationCards = () => {
  return (
    <div className="px-8 md:px-16 space-y-8">
      {/* Première ligne : Gameboy Color et Gameboy Advance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gameboy Color Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">LE PLUS GRAND ÉCRAN</h3>
          <h2 className="text-3xl font-bold mt-2">GAMEBOY COLOR</h2>
          <img
            className="mt-6 mb-4 w-full max-w-xs mx-auto"
            src="/img/GB-Home-resize-gris.png"
            alt="Gameboy Color"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Personnaliser
          </button>
        </div>

        {/* Gameboy Advance Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">LA PLUS POLYVALENTE</h3>
          <h2 className="text-3xl font-bold mt-2">GAMEBOY ADVANCE</h2>
          <img
            className="mt-6 mb-4 w-full max-w-xs mx-auto"
            src="/img/GBA-Home-resize-vert.png"
            alt="Gameboy Advance"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Personnaliser
          </button>
        </div>
      </div>

      {/* Deuxième ligne : Advance SP et Gameboy DMG */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Advance SP Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">LA PLUS PRATIQUE</h3>
          <h2 className="text-3xl font-bold mt-2">ADVANCE SP</h2>
          <img
            className="mt-6 mb-4 w-full max-w-xs mx-auto"
            src="/img/GBC-Home-resize.png"
            alt="Advance SP"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Personnaliser
          </button>
        </div>

        {/* Gameboy DMG Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">L'ORIGINALE</h3>
          <h2 className="text-3xl font-bold mt-2">GAMEBOY DMG</h2>
          <img
            className="mt-6 mb-4 w-full max-w-xs mx-auto"
            src="/img/GBASP-Home-resize.png"
            alt="Gameboy DMG"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Personnaliser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomisationCards;
