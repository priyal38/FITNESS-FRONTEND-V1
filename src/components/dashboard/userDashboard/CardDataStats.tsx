import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: number | string;
 
  children:ReactNode
  
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  
  children
 
}) => {
  return (
    <div className="rounded-lg  border h-44 bg-surface-200 py-6  shadow-inner shadow-slate-600 border-gray-800">

      <div className="flex h-12 w-12 items-center mx-auto justify-center rounded-lg bg-primary-200">
        {children}
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div>
          <h4 className="text-2xl text-center mb-2 font-semibold text-white">
            {total}
          </h4>
          <span className="text-base  text-gray-300  tracking-normal font-medium">{title}</span>
        </div> 
      </div>
    </div>
  );
};

export default CardDataStats;