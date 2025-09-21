import React from 'react';

/* resolve icons */
const upIcon = new URL('../assets/home-1.svg', import.meta.url).href;   // arrow up
const downIcon = new URL('../assets/home-2.svg', import.meta.url).href; // arrow down

const Cards = () => {
  const stats = [
    { title: 'Customers', value: '3,781', change: '+11.01%', positive: true, bg: 'bg-[#EAF6FF]' },
    { title: 'Orders', value: '1,219', change: '-0.03%', positive: false, bg: 'bg-white' },
    { title: 'Revenue', value: '$695', change: '+15.03%', positive: true, bg: 'bg-white' },
    { title: 'Growth', value: '30.1%', change: '+6.08%', positive: true, bg: 'bg-[#EEF2FF]' },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`rounded-2xl p-5 shadow-sm border border-figma-border ${stat.bg}`}
        >
          {/* Title */}
          <h4 className="text-sm font-medium text-gray-800 mb-2">{stat.title}</h4>

          {/* Value + Change */}
          <div className="flex items-center justify-between">
            <div className="text-3xl font-extrabold text-gray-900">{stat.value}</div>
            <div
              className={`flex items-center text-sm font-medium ${
                stat.positive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              <span className="mr-1">{stat.change}</span>
              <img
                src={stat.positive ? upIcon : downIcon}
                alt={stat.positive ? 'Up' : 'Down'}
                className={`w-4 h-4 ${!stat.positive ? 'rotate-180' : ''}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
