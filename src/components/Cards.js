import React from 'react';


const upIcon = new URL('../assets/home-1.svg', import.meta.url).href;
const downIcon = new URL('../assets/home-2.svg', import.meta.url).href;

const Cards = () => {
  const stats = [
    { title: 'Customers', value: '3,781', change: '+11.01%', positive: true, lightBg: 'bg-[#EAF6FF]', darkBg: 'bg-gray-800' },
    { title: 'Orders', value: '1,219', change: '-0.03%', positive: false, lightBg: 'bg-white', darkBg: 'bg-gray-800' },
    { title: 'Revenue', value: '$695', change: '+15.03%', positive: true, lightBg: 'bg-white', darkBg: 'bg-gray-800' },
    { title: 'Growth', value: '30.1%', change: '+6.08%', positive: true, lightBg: 'bg-[#EEF2FF]', darkBg: 'bg-gray-800' },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, idx) => (
     
        <div
          key={idx}
          className={`group rounded-2xl p-5 shadow-sm border border-figma-border transition-all duration-300 
                      ${stat.lightBg} dark:${stat.darkBg} hover:shadow-md hover:scale-[1.01]`}
        >
        
          <h4 className="text-sm font-medium text-figma-gray dark:text-white mb-2">{stat.title}</h4>

 
          <div className="flex items-center justify-between">
      
            <div
              className="text-3xl font-extrabold text-figma-gray dark:text-white order-1 transition-all duration-300 ease-in-out
                         group-hover:order-2 group-hover:text-4xl"
            >
              {stat.value}
            </div>

     
            <div
              className={`flex items-center text-sm font-medium transition-all duration-300 ease-in-out order-2
                          ${stat.positive ? 'text-green-600' : 'text-red-600'}
                          group-hover:order-1`}
            >
              <span className="mr-1">{stat.change}</span>

              <img
                src={stat.positive ? upIcon : downIcon}
                alt={stat.positive ? 'Up' : 'Down'}
                className={
                  `w-[16px] h-[16px] transition-transform duration-300 ease-in-out transform 
                   ${!stat.positive ? 'rotate-180' : ''} 
                   group-hover:scale-110 group-hover:translate-x-1 
                   dark:invert dark:brightness-100`
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
