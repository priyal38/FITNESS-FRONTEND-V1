import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="h-full bg-surface-200 rounded-lg overflow-hidden shadow-inner shadow-slate-400">
      <div className="animate-pulse bg-surface-300 h-44 w-full"></div>
      <div className="p-4">
        <div className="animate-pulse bg-surface-300  rounded-lg 4 w-1/2 mb-4"></div>
        <div className="animate-pulse bg-surface-300 h-4 w-3/4  rounded-lg mb-2"></div>
          <div className="animate-pulse bg-surface-300 h-4  rounded-lg w-1/4"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
