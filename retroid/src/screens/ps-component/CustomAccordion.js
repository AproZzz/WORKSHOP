import React, { useState } from 'react';

const CustomAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <div
        onClick={toggleAccordion}
        className="cursor-pointer p-4 bg-gray-100 flex justify-between items-center"
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;
