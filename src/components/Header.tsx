import React from 'react';


export const Header: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 p-6 z-20">
      <div className="flex flex-col items-start">
        {/* Logo composition */}
        <div className="flex items-center gap-2">
          {/* Stylized Logo Placeholder */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Artistic representation of the V logo in the screenshot */}
            <div className="absolute inset-0 bg-black/80 skew-x-12 w-4 h-12 left-2 rounded-sm"></div>
            <div className="absolute inset-0 bg-red-500/90 -skew-x-12 w-4 h-6 left-0 top-6 rounded-sm"></div>
            <div className="absolute inset-0 bg-yellow-400/90 skew-x-12 w-4 h-6 left-6 top-6 rounded-sm"></div>
            <div className="absolute inset-0 bg-green-600/90 -skew-x-12 w-2 h-8 left-3 top-8 rounded-sm z-10"></div>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-bold text-black leading-none tracking-tight">
              Val-d'Or
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};