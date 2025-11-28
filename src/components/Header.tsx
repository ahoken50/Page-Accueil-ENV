import React from 'react';
import logo from '../assets/logo-val-dor.png';

export const Header: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 p-6 z-20">
      <div className="flex flex-col items-start">
        {/* Logo composition */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Ville de Val-d'Or"
            className="h-16 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};