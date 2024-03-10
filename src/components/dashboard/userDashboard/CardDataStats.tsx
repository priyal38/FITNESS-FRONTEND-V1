import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
 
  children:ReactNode
  
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  
  children
 
}) => {
  return (
    <div className="rounded-lg  border  bg-surface-200 py-6  shadow  shadow-slate-800 border-gray-700">

      <div className="flex h-12 w-12 items-center mx-auto justify-center rounded-lg bg-primary-200">
        {children}
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div>
          <h4 className="text-2xl text-center mb-3 font-bold text-white">
            {total}
          </h4>
          <span className="text-base  text-gray-300  tracking-normal font-medium">{title}</span>
        </div> 
      </div>
    </div>
  );
};

export default CardDataStats;