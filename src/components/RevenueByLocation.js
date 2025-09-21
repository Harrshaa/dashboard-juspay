import React from 'react';

const location = new URL('../assets/location.svg', import.meta.url).href;

const RevenueByLocation = () => {
  const locations = [
    { name: "New York", revenue: "72K", color: "bg-blue-500" },
    { name: "San Francisco", revenue: "39K", color: "bg-green-500" },
    { name: "Sydney", revenue: "25K", color: "bg-yellow-500" },
    { name: "Singapore", revenue: "61K", color: "bg-purple-500" },
  ];

  return (
    <div className="bg-figma-card dark:bg-gray-800 rounded-12 shadow-figma-card p-24 border border-figma-border dark:border-gray-700">
      <h3 className="text-18 font-semibold text-figma-gray dark:text-white mb-16 font-inter">Revenue by Location</h3>
      
      {/* World Map representation */}
      <div className="relative mb-6">
        <div className="w-full h-24 sm:h-32 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
          <img 
            src={location}
            alt="World Map with Revenue Locations" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Location list */}
      <div className="space-y-3">
        {locations.map((location, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${location.color}`}></div>
              <span className="text-14 text-figma-gray dark:text-white font-inter">{location.name}</span>
            </div>
            <span className="text-14 font-medium text-figma-gray dark:text-white font-inter">{location.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByLocation;
