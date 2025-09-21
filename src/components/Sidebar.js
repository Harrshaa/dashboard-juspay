import React from 'react';


const dashboard1 = new URL('../assets/dashboard-2.svg', import.meta.url).href;
const dashboard2 = new URL('../assets/dashboard-3.svg', import.meta.url).href;
const dashboard3 = new URL('../assets/dashboard-4.svg', import.meta.url).href;
const dashboard4 = new URL('../assets/dashboard-5.svg', import.meta.url).href;

const pages1 = new URL('../assets/pages-1.svg', import.meta.url).href;
const pages2 = new URL('../assets/pages-2.svg', import.meta.url).href;
const pages3 = new URL('../assets/pages-3.svg', import.meta.url).href;
const pages4 = new URL('../assets/pages-4.svg', import.meta.url).href;
const pages5 = new URL('../assets/pages-5.svg', import.meta.url).href;


const Sidebar = ({ onClose, onPageChange }) => {
  return (
    <div className="w-full h-screen bg-figma-card dark:bg-gray-800 border-r border-figma-gray-10 dark:border-gray-700 flex flex-col items-center py-5 px-4 gap-4 overflow-y-auto">
     
      <button
        className="lg:hidden absolute top-4 right-4 p-2 hover:bg-figma-gray-5 dark:hover:bg-gray-700 rounded-8"
        onClick={onClose}
      >
        {/* <img src="/images/header-8.svg" alt="Close" className="w-5 h-5" /> */}
      </button>
  
      <div className="w-full flex items-center gap-2 p-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-12 font-bold font-inter">B</span>
          </div>
          <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">ByeWind</span>
        </div>
      </div>

    
      <div className="w-full flex flex-col gap-1 pb-3">
        <div className="flex gap-2">
          <button className="px-2 py-1 text-figma-gray-40 dark:text-gray-400 text-14 font-inter hover:bg-figma-gray-5 dark:hover:bg-gray-700 rounded-8">
            Favorites
          </button>
          <button className="px-2 py-1 text-figma-gray-20 dark:text-gray-500 text-14 font-inter hover:bg-figma-gray-5 dark:hover:bg-gray-700 rounded-8">
            Recently
          </button>
        </div>
        
     
        <button 
          className="flex items-center gap-1 px-2 py-1 hover:bg-figma-gray-5 dark:hover:bg-gray-700 rounded-8 w-full text-left"
          onClick={() => onPageChange && onPageChange('dashboard')}
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-figma-gray-20 rounded-full"></div>
          </div>
          <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Overview</span>
        </button>

        <button 
          className="flex items-center gap-1 px-2 py-1 hover:bg-figma-gray-5 dark:hover:bg-gray-700 rounded-8 w-full text-left"
          onClick={() => onPageChange && onPageChange('projects')}
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-figma-gray-20 rounded-full"></div>
          </div>
          <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Projects</span>
        </button>
      </div>

   
      <div className="w-full flex flex-col gap-1 pb-3">
        <div className="px-3 py-1">
          <span className="text-figma-gray-40 dark:text-gray-400 text-14 font-inter">Dashboards</span>
        </div>
        
  
        <div className="flex items-center justify-between px-2 py-1 bg-figma-gray-5 dark:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={dashboard1}alt="Default" className="w-5 h-5 dark:invert dark:brightness-100" />
            </div>
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Default</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-4 bg-figma-gray"></div>
            <img src="/images/header-8.svg" alt="Arrow" className="w-4 h-4 opacity-0" />
          </div>
        </div>

 
        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={dashboard2}alt="eCommerce" className="w-5 h-5 dark:invert dark:brightness-100" />
            </div>
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">eCommerce</span>
          </div>
          <img src="/images/header-8.svg" alt="Arrow" className="w-4 h-4" />
        </div>

     
        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={dashboard3} alt="Projects" className="w-5 h-5 dark:invert dark:brightness-100" />
            </div>
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Projects</span>
          </div>
          <img src="/images/header-8.svg" alt="Arrow" className="w-4 h-4" />
        </div>

     
        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={dashboard4} alt="Online Courses" className="w-5 h-5 dark:invert dark:brightness-100" />
            </div>
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Online Courses</span>
          </div>
          <img src="/images/header-8.svg" alt="Arrow" className="w-4 h-4" />
        </div>
      </div>

     
      <div className="w-full flex flex-col gap-1">
        <div className="px-3 py-1">
          <span className="text-figma-gray-40 dark:text-gray-400 text-14 font-inter">Pages</span>
        </div>
        
   
        <button 
          className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 rounded w-full text-left"
          onClick={() => onPageChange && onPageChange('profile')}
        >
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={pages1}alt="User Profile" className="w-5 h-5 dark:brightness-100" />
            </div>
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">User Profile</span>
          </div>
          <img src="/images/header-8.svg" alt="Dropdown" className="w-4 h-4" />
        </button>

    
        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            {/* <div className="w-5 h-5 flex items-center justify-center opacity-0">
              <img src="/images/pages-2.svg" alt="Page" className="w-5 h-5" />
            </div> */}
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Overview</span>
          </div>
          <img src="/images/header-8.svg" alt="Dropdown" className="w-4 h-4 opacity-0" />
        </div>


        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            {/* <div className="w-5 h-5 flex items-center justify-center opacity-0">
              <img src="/images/pages-2.svg" alt="Page" className="w-5 h-5" />
            </div> */}
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Projects</span>
          </div>
          <img src="/images/header-8.svg" alt="Dropdown" className="w-4 h-4 opacity-0" />
        </div>

      
        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            {/* <div className="w-5 h-5 flex items-center justify-center opacity-0">
              <img src="/images/pages-2.svg" alt="Page" className="w-5 h-5" />
            </div> */}
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Campaigns</span>
          </div>
          <img src="/images/header-8.svg" alt="Dropdown" className="w-4 h-4 opacity-0" />
        </div>

      
        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            {/* <div className="w-5 h-5 flex items-center justify-center opacity-0">
              <img src="/images/pages-2.svg" alt="Page" className="w-5 h-5" />
            </div> */}
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Documents</span>
          </div>
          <img src="/images/header-8.svg" alt="Dropdown" className="w-4 h-4 opacity-0" />
        </div>

        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            {/* <div className="w-5 h-5 flex items-center justify-center opacity-0">
              <img src="/images/pages-2.svg" alt="Page" className="w-5 h-5" />
            </div> */}
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Followers</span>
          </div>
          <img src="/images/header-8.svg" alt="Dropdown" className="w-4 h-4 opacity-0" />
        </div>

   
        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={pages2} alt="Account" className="w-5 h-5" />
            </div>
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Account</span>
          </div>
          <img src="/images/header-8.svg" alt="Arrow" className="w-4 h-4" />
        </div>

     
        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={pages3} alt="Corporate" className="w-5 h-5" />
            </div>
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Corporate</span>
          </div>
          <img src="/images/header-8.svg" alt="Arrow" className="w-4 h-4" />
        </div>

   
        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={pages4} alt="Blog" className="w-5 h-5" />
            </div>
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Blog</span>
          </div>
          <img src="/images/header-8.svg" alt="Arrow" className="w-4 h-4" />
        </div>

    
        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={pages5} alt="Social" className="w-5 h-5" />
            </div>
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Social</span>
          </div>
          <img src="/images/header-8.svg" alt="Arrow" className="w-4 h-4" />
        </div>

      
        <button 
          className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 rounded w-full text-left"
          onClick={() => onPageChange && onPageChange('orders')}
        >
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              {/* <img src="/images/pages-4.svg" alt="Account" className="w-5 h-5" /> */}
            </div>
            <span className="text-figma-gray dark:text-gray-300 text-14 font-inter">Orders</span>
          </div>
          <img src="/images/header-8.svg" alt="Arrow" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
