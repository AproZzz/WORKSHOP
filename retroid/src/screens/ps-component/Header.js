import React from 'react';

const Header = () => {
  return (
    <header className="relative w-full h-96 bg-cover bg-bottom" style={{ backgroundImage: `url('/img/ps.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative h-96 z-10 flex flex-col justify-center text-white max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold">PS VITA OLED</h1>
        <p className="mt-2 text-lg">A partir de 189€</p>
      </div>
    </header>
  );
}

export default Header;
