import React from 'react';


const ProjectionsChart = () => {

const projectionActual = new URL('../assets/Chart-1.svg', import.meta.url).href; // arrow down
  const data = [
    { month: 'Jan', value: 10, maxValue: 30 },
    { month: 'Feb', value: 15, maxValue: 30 },
    { month: 'Mar', value: 12, maxValue: 30 },
    { month: 'Apr', value: 18, maxValue: 30 },
    { month: 'May', value: 20, maxValue: 30 },
    { month: 'Jun', value: 16, maxValue: 30 },
  ];

  return (
    <div className="bg-figma-card dark:bg-gray-800 rounded-12 shadow-figma-card p-24 border border-figma-border dark:border-gray-700 h-full">
      <h3 className="text-18 font-semibold text-figma-gray dark:text-white mb-16 font-inter">Projections vs Actuals</h3>
      
      {/* Y-axis labels */}
      <div className="relative h-40 sm:h-48">
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-12 text-figma-gray-40 dark:text-gray-400 font-inter">
          {/* <span>30M</span>
          <span>25M</span>
          <span>20M</span>
          <span>15M</span>
          <span>10M</span>
          <span>5M</span>
          <span>0</span> */}
        </div>
        {/* Projections Chart Image */}
        <div className="ml-8 h-full flex items-center justify-center">
          <img 
            src={projectionActual} 
            alt="Projections vs Actuals Chart" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectionsChart;
