import React from 'react';

const TotalSales = () => {
  const salesData = [
    { source: "Direct", percentage: 38.6, amount: "$300.56", color: "bg-purple-500" },
    { source: "Affiliate", percentage: 18.3, amount: "$135.18", color: "bg-blue-300" },
    { source: "Sponsored", percentage: 20.8, amount: "$154.02", color: "bg-green-500" },
    { source: "E-mail", percentage: 22.3, amount: "$48.96", color: "bg-yellow-500" },
  ];

  return (
    <div className="bg-figma-card dark:bg-gray-800 rounded-12 shadow-figma-card p-24 border border-figma-border dark:border-gray-700">
      <h3 className="text-18 font-semibold text-figma-gray dark:text-white mb-16 font-inter">Total Sales</h3>
      
      {/* Donut chart representation - Using Figma image */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <img 
            src="/images/sales.svg" 
            alt="Total Sales Donut Chart" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {salesData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
              <span className="text-14 text-figma-gray dark:text-white font-inter">{item.source}</span>
            </div>
            <div className="text-right">
              <div className="text-14 font-medium text-figma-gray dark:text-white font-inter">{item.percentage}%</div>
              <div className="text-12 text-figma-gray-40 dark:text-gray-400 font-inter">{item.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSales;
