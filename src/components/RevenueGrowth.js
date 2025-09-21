import React from 'react';
const revenue = new URL('../assets/Chart.svg', import.meta.url).href;

const RevenueGrowth = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
      {/* Projections vs Actuals Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Projections vs Actuals</h3>
        
        {/* Projections Chart Image */}
        <div className="relative h-40 sm:h-48 flex items-center justify-center">
          <img 
            src="/images/projections.svg" 
            alt="Projections vs Actuals Chart" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Current Week $58,211</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Previous Week $68,768</span>
            </div>
          </div>
        </div>
        
        {/* Revenue Chart Image */}
        <div className="relative h-40 sm:h-48 flex items-center justify-center">
          <img 
            src={revenue}
            alt="Revenue Chartg" 
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default RevenueGrowth;
