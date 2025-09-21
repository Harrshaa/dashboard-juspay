import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Cards from './components/Cards';
import ProjectionsChart from './components/ProjectionsChart';
import RightSidebar from './components/RightSidebar';
import TopSellingProducts from './components/TopSellingProducts';
import RevenueByLocation from './components/RevenueByLocation';
import TotalSales from './components/TotalSales';
import OrdersList from './components/OrdersList';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './contexts/ThemeContext';
const revenue = new URL('./assets/Chart.svg', import.meta.url).href;

const right = new URL('./assets/ArrowLineLeft.svg', import.meta.url).href;
const left = new URL('./assets/ArrowLineRight.svg', import.meta.url).href;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const { isDarkMode } = useTheme();


  const renderMainContent = () => {
    if (currentPage === 'orders') {
      return (
        <div className="space-y-24">
     
          <Header title={isDarkMode ? "Orders List - Dark" : "Orders List - Light"} />
          
      
          <div className="text-14 text-figma-gray-60 dark:text-gray-400 font-inter">
            <span className="text-figma-gray dark:text-white">Dashboards</span> / <span className="text-figma-gray-60 dark:text-gray-400">Default</span>
          </div>
          
        
          <OrdersList />
        </div>
      );
    }

    return (
      <div className="space-y-24">
        {/* Header */}
        <Header />
        
        {/* Breadcrumb */}
        <div className="text-14 text-figma-gray-60 dark:text-gray-400 font-inter">
          <span className="text-figma-gray dark:text-white">Dashboards</span> / <span className="text-figma-gray-60 dark:text-gray-400">Default</span>
        </div>
     
        <div>
          <h2 className="text-24 font-bold text-figma-gray dark:text-white mb-24 font-inter">eCommerce</h2>
        </div>
        
    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-24">
       
          <div className="lg:col-span-2">
            <Cards />
          </div>
        
          <div className="lg:col-span-1">
            <ProjectionsChart />
          </div>
        </div>
        
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
      
          <div className="bg-figma-card dark:bg-gray-800 rounded-12 shadow-figma-card p-24 border border-figma-border dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-16 space-y-2 sm:space-y-0">
              <h3 className="text-18 font-semibold text-figma-gray dark:text-white font-inter">Revenue</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
                  <span className="text-14 text-figma-gray-60 dark:text-gray-400 font-inter">Current Week $58,211</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
                  <span className="text-14 text-figma-gray-60 dark:text-gray-400 font-inter">Previous Week $68,768</span>
                </div>
              </div>
            </div>

            {/* Revenue Chart Image */}
            <div className="relative h-40 sm:h-48">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-12 text-figma-gray-40 dark:text-gray-400 font-inter">
                {/* <span>20M</span>
                <span>15M</span>
                <span>10M</span>
                <span>5M</span>
                <span>0</span> */}
              </div>
              <div className="ml-8 h-full flex items-center justify-center">
                <img 
                  src={revenue}
                  alt="Revenue Chart" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
         
          </div>
          
    
          <RevenueByLocation />
        </div>
        
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <TopSellingProducts />
          <TotalSales />
        </div>
      </div>
    );
  };

  return (
    <div className="App flex h-screen bg-figma-bg dark:bg-gray-900 font-inter">
  
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-figma-card dark:bg-gray-800 rounded-8 shadow-figma-card border border-figma-border dark:border-gray-700"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar menu"
      >
        <img src={sidebarOpen? right : left} alt="Menu" className="w-6 h-6 dark:invert dark:brightness-100" />
      </button>
      
   
      {currentPage !== 'orders' && (
        <button
          className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-figma-card dark:bg-gray-800 rounded-8 shadow-figma-card border border-figma-border dark:border-gray-700"
          onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
          aria-label="Toggle right sidebar"
        >
          <img src={rightSidebarOpen? left: right} alt="Right Sidebar" className="w-6 h-6 dark:invert dark:brightness-100" />
        </button>
      )}

    
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 lg:w-212 bg-figma-card dark:bg-gray-800 border-r border-figma-border dark:border-gray-700 transition-transform duration-300 ease-in-out`}>
        <Sidebar onClose={() => setSidebarOpen(false)} onPageChange={setCurrentPage} />
      </div>

  
      {(sidebarOpen || (rightSidebarOpen && currentPage !== 'orders')) && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => {
            setSidebarOpen(false);
            setRightSidebarOpen(false);
          }}
        />
      )}

   
      <div className="flex-1 flex flex-col min-w-0">
       
        <main className="flex-1 p-24 overflow-y-auto">
          <div className="max-w-none">
            {renderMainContent()}
          </div>
        </main>
      </div>

     
      {currentPage !== 'orders' && (
        <>
        
          <div className="hidden lg:block w-280 bg-figma-card dark:bg-gray-800 border-l border-figma-border dark:border-gray-700 p-24 overflow-y-auto">
            <RightSidebar />
          </div>

         
          <div className={`${rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden fixed inset-y-0 right-0 z-40 w-280 bg-figma-card dark:bg-gray-800 border-l border-figma-border dark:border-gray-700 p-24 overflow-y-auto transition-transform duration-300 ease-in-out`}>
            <button
              className="lg:hidden absolute top-4 right-4 p-2 hover:bg-figma-gray-5 dark:hover:bg-gray-700 rounded-8"
              onClick={() => setRightSidebarOpen(false)}
            >
              <img src={right} alt="Close" className="w-5 h-5 dark:invert" />
            </button>
            <RightSidebar />
          </div>
        </>
      )}
    </div>
  );
}

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(   <ThemeProvider>
    <App />
  </ThemeProvider>)
