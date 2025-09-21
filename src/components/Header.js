import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const header1 = new URL('../assets/header-1.svg', import.meta.url).href;
const header2 = new URL('../assets/header-2.svg', import.meta.url).href;
const header3 = new URL('../assets/header-3.svg', import.meta.url).href;
const header4 = new URL('../assets/header-4.svg', import.meta.url).href;
const header5 = new URL('../assets/header-5.svg', import.meta.url).href;
const header6 = new URL('../assets/header-6.svg', import.meta.url).href;
const header7 = new URL('../assets/header-7.svg', import.meta.url).href;
const header8 = new URL('../assets/header-8.svg', import.meta.url).href;



const Header = ({ title }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-[#FFFFFF1A] border-b border-gray-200 dark:border-gray-700 shadow-sm text-white">
  
      
 
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
     
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              {/* <img src="/images/logo.svg" alt="ByeWind" className="w-8 h-8" /> */}
              {/* <span className="text-xl font-bold text-gray-900 dark:text-white">ByeWind</span> */}
            </div>
            
       
            <div className="flex items-center space-x-3">
              <img src={header1} alt="Grid" className="w-7 h-7 dark:invert dark:brightness-100" />
              <img src={header2} alt="Star" className="w-5 h-5 dark:invert dark:brightness-100" />
              <span className="text-gray-500 text-sm">Dashboards</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 dark:text-white text-sm font-medium">Default</span>
            </div>
          </div>

        
          <div className="flex-1 max-w-md mx-8">
  <div className="relative">

    <img
      src={header8}
      alt="Search"
      className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:invert dark:brightness-100"
    />


    <input
      type="text"
      placeholder="Search"
      className="w-full pl-10 pr-10 py-2.5 border border-gray-200 dark:border-gray-600 
                 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                 text-sm placeholder-gray-400"
    />

    <img
      src={header7}
      alt="Shortcut"
      className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:invert dark:brightness-100"
    />
  </div>
</div>


     
          <div className="flex items-center space-x-2">
            <button 
              className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              onClick={toggleTheme}
              title="Toggle theme"
            >
              <img src={header3} alt="Theme" className="w-7 h-7 dark:invert dark:brightness-100" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200" title="Clock">
              <img src={header4} alt="Clock" className="w-7 h-7 dark:invert dark:brightness-100" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200" title="Notifications">
              <img src={header5} alt="Notifications" className="w-7 h-7 dark:text-white dark:invert dark:brightness-100" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200" title="Folder">
              <img src={header6} alt="Folder" className="w-5 h-5 dark:invert dark:brightness-100" />
            </button>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
