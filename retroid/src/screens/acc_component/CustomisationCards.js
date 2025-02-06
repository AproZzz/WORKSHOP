import React from "react";

const CustomisationCards = () => {
  return (
    <div className="px-8 md:px-3 space-y-8 ">
      {/* Première ligne : Gameboy Color et Gameboy Advance */}
      <div className="grid grid-cols-5 gap-4 space-y-8 md:space-y-0 md:space-x-8">
        {/* Gameboy Color Section */}
        <div className="col-span-2 bg-gradient-to-br from-[#0093E9] to-[#80D0C7] p-8 rounded-lg shadow-lg text-center gameboy">
          <h3 className="text-lg font-semibold mt-3">LE PLUS GRAND ÉCRAN</h3>
          <h2 className="text-3xl font-extrabold mt-2 mb-10">GAMEBOY COLOR</h2>
          
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Personnaliser
          </button>
          <img
            className="mt-6 w-full max-w-xs mx-auto object-contain h-auto gameboy-img"
            src="/img/GBC-Home-resize.png "
            alt="Gameboy Color"
          />
        </div>

        {/* Gameboy Advance Section */}
        <div className="flex-1 bg-gradient-to-br from-[#134E5E] to-[#71B280] p-8 rounded-lg shadow-lg text-center col-span-3 gameboy">
          <h3 className="text-lg font-semibold mt-3">LA PLUS POLYVALENTE</h3>
          <h2 className="text-3xl font-extrabold mt-2 mb-10">GAMEBOY ADVANCE</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Personnaliser
          </button>
          <img
            className="mt-6 w-full max-w-xs mx-auto object-contain h-auto gameboy-img"
            src="/img/GBA-Home-resize-vert.png"
            alt="Gameboy Advance"
          />
        </div>
      </div>

      {/* Deuxième ligne : Advance SP et Gameboy DMG */}
      <div className="grid grid-cols-5 gap-4 space-y-8 md:space-y-0 md:space-x-8">
        {/* Advance SP Section */}
        <div className="col-span-3 bg-gradient-to-br from-[#000046] to-[#1CB5E0] p-8 rounded-lg shadow-lg text-center gameboy">
          <h3 className="text-lg font-semibold mt-3">LA PLUS PRATIQUE</h3>
          <h2 className="text-3xl font-extrabold mt-2 mb-6">ADVANCE SP</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Personnaliser
          </button>
          <img
            className="mt-6 w-full max-w-xs mx-auto object-contain h-auto gameboy-img"
            src="/img/GBASP-Home-resize.png"
            alt="Advance SP"
          />
        </div>

        {/* Gameboy DMG Section */}
        <div className="col-span-2 bg-gradient-to-br from-[#F2994A] to-[#F2C94C] p-8 rounded-lg shadow-lg text-center gameboy">
          <h3 className="text-lg font-semibold mt-3">L'ORIGINALE</h3>
          <h2 className="text-3xl font-extrabold mt-2 mb-6">GAMEBOY DMG</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Personnaliser
          </button>
          <img
            className="mt-6 w-full max-w-xs mx-auto object-contain h-auto gameboy-img"
            src="/img/GB-Home-resize-gris.png"
            alt="Gameboy DMG"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomisationCards;
