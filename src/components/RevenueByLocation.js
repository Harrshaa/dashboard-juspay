import React from 'react';
const locationImg = new URL('../assets/location.svg', import.meta.url).href;

const RevenueByLocation = () => {
  // numeric values (used to compute relative widths)
  const locations = [
    { name: "New York", revenue: "72K", value: 72, dotColor: "bg-blue-500" },
    { name: "San Francisco", revenue: "39K", value: 39, dotColor: "bg-green-500" },
    { name: "Sydney", revenue: "25K", value: 25, dotColor: "bg-yellow-500" },
    { name: "Singapore", revenue: "61K", value: 61, dotColor: "bg-purple-500" },
  ];

  // find max to normalize widths
  const max = Math.max(...locations.map(l => l.value));

  return (
    <div className="bg-figma-card dark:bg-gray-800 rounded-2xl shadow-figma-card p-6 sm:p-8 border border-figma-border dark:border-gray-700 max-w-md">
      <h3 className="text-lg sm:text-xl font-semibold text-figma-gray dark:text-white mb-4 sm:mb-6 font-inter">
        Revenue by Location
      </h3>

      <div className="w-full flex justify-center mb-4 sm:mb-6">
        <div className="w-full max-w-xs sm:max-w-full h-28 sm:h-36 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden p-3">
          <img
            src={locationImg}
            alt="World Map with Revenue Locations"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      <div className="space-y-5">
        {locations.map((loc, idx) => {
          // normalized percent (0-100)
          const pct = Math.round((loc.value / max) * 100);
          return (
            <div key={idx}>
              {/* grid with two columns: left takes remaining, right auto width for revenue */}
              <div
                className="grid items-center"
                style={{ gridTemplateColumns: '1fr auto', gap: '0.75rem' }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3.5 h-3.5 rounded-full ${loc.dotColor}`}></div>
                  <span className="text-sm text-figma-gray dark:text-white font-inter">{loc.name}</span>
                </div>

                <div className="text-sm font-medium text-figma-gray dark:text-white font-inter">{loc.revenue}</div>

                {/* progress bar - spans both columns */}
                <div className="col-span-2 mt-2">
                  <div className="h-1.5 bg-blue-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-1.5 bg-blue-400 rounded-full"
                      style={{ width: `${pct}%`, transition: 'width 400ms ease' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RevenueByLocation;
