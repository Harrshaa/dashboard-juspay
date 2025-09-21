import React from 'react';

const TopSellingProducts = () => {
  const products = [
    { id: 1, name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18", image: "/images/product-1.svg" },
    { id: 2, name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50", image: "/images/product-2.svg" },
    { id: 3, name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36", image: "/images/product-3.svg" },
    { id: 4, name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00", image: "/images/product-4.svg" },
    { id: 5, name: "Marco Shoes", price: "$28.49", quantity: 69, amount: "$1,965.81", image: "/images/product-5.svg" },
  ];

  return (
    <div className="bg-figma-card dark:bg-gray-800 rounded-12 shadow-figma-card p-24 border border-figma-border dark:border-gray-700">
      <h3 className="text-18 font-semibold text-figma-gray dark:text-white mb-16 font-inter">Top Selling Products</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-figma-border dark:border-gray-700">
              <th className="text-left py-12 px-16 font-medium text-figma-gray-60 dark:text-gray-400 text-14 font-inter">Product</th>
              <th className="text-left py-12 px-16 font-medium text-figma-gray-60 dark:text-gray-400 text-14 font-inter">Price</th>
              <th className="text-left py-12 px-16 font-medium text-figma-gray-60 dark:text-gray-400 text-14 font-inter">Quantity</th>
              <th className="text-left py-12 px-16 font-medium text-figma-gray-60 dark:text-gray-400 text-14 font-inter">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-figma-border dark:border-gray-700 hover:bg-figma-gray-5 dark:hover:bg-gray-700">
                <td className="py-12 px-16">
                  <div className="flex items-center space-x-12">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-8 h-8 rounded-8 object-cover"
                    />
                    <span className="text-14 text-figma-gray dark:text-white font-inter">{product.name}</span>
                  </div>
                </td>
                <td className="py-12 px-16 text-14 text-figma-gray-60 dark:text-gray-400 font-inter">{product.price}</td>
                <td className="py-12 px-16 text-14 text-figma-gray-60 dark:text-gray-400 font-inter">{product.quantity}</td>
                <td className="py-12 px-16 text-14 font-medium text-figma-gray dark:text-white font-inter">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;
