import React, { useState, useMemo, useEffect } from 'react';

/* Resolve contact avatars (adjust filenames if needed) */
const contact1 = new URL('../assets/contacts-1.svg', import.meta.url).href;
const contact2 = new URL('../assets/contacts-2.svg', import.meta.url).href;
const contact3 = new URL('../assets/contacts-3.svg', import.meta.url).href;
const contact4 = new URL('../assets/contacts-4.svg', import.meta.url).href;
const contact5 = new URL('../assets/contacts-5.svg', import.meta.url).href;
const contact6 = new URL('../assets/contacts-6.svg', import.meta.url).href;
const left = new URL('../assets/ArrowLineLeft.svg', import.meta.url).href;
const right = new URL('../assets/ArrowLineRight.svg', import.meta.url).href;
const sort = new URL('../assets/sort.svg', import.meta.url).href;
const plus = new URL('../assets/Button.svg', import.meta.url).href;
const filter = new URL('../assets/filter.svg', import.meta.url).href;
const down = new URL('../assets/down.svg', import.meta.url).href;
const search = new URL('../assets/header-8.svg', import.meta.url).href;
/* Other small icons used in table toolbar / date / doc / pagination */
const iconAdd = new URL('../assets/header-7.svg', import.meta.url).href;
const iconSearch = new URL('../assets/header-7.svg', import.meta.url).href; // reuse if same
const iconCalendar = new URL('../assets/header-4.svg', import.meta.url).href;
const iconDots = new URL('../assets/header-8.svg', import.meta.url).href;
// const iconDocument = new URL('../assets/document-icon.svg', import.meta.url).href;

/* Map names to avatar keys (adjust names to match your order.user values) */
const USER_AVATARS = {
  'Natali Craig': contact1,
  'Kate Morrison': contact5,
  'Drew Cano': contact2,
  'Orlando Diggs': contact3,
  'Andi Lane': contact4,

};

const OrdersList = () => {
  // Generate 70 orders for pagination demonstration
  const generateOrders = () => {
    const baseOrders = [
      { user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", statusColor: "text-purple-600", statusDot: "bg-purple-500" },
      { user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", statusColor: "text-green-600", statusDot: "bg-green-500" },
      { user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", statusColor: "text-blue-600", statusDot: "bg-blue-500" },
      { user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", statusColor: "text-yellow-600", statusDot: "bg-yellow-500" },
      { user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", statusColor: "text-gray-600", statusDot: "bg-gray-500" },

    ];

    const allOrders = [];
    for (let i = 0; i < 70; i++) {
      const baseOrder = baseOrders[i % baseOrders.length];
      const orderId = `#CM${String(9801 + i).padStart(4, '0')}`;
      allOrders.push({
        id: orderId,
        ...baseOrder,
        timestamp: Date.now() - (i * 60000), // Each order is 1 minute older
        highlighted: i === 4, // match screenshot where one mid-row highlighted (index 4)
      });
    }
    return allOrders;
  };

  const allOrders = useMemo(generateOrders, []);

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedOrders, setSelectedOrders] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Filter and search logic
  const filteredOrders = useMemo(() => {
    let filtered = allOrders.filter(order => {
      // Search filter
      const searchMatch = searchTerm === '' ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.status.toLowerCase().includes(searchTerm.toLowerCase());

      // Status filter
      const statusMatch = statusFilter === 'all' || order.status === statusFilter;

      return searchMatch && statusMatch;
    });

    // Sort logic
    if (sortField) {
      filtered.sort((a, b) => {
        let aValue = a[sortField];
        let bValue = b[sortField];

        // Handle different data types
        if (sortField === 'timestamp') {
          aValue = a.timestamp;
          bValue = b.timestamp;
        } else if (typeof aValue === 'string') {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [allOrders, searchTerm, sortField, sortDirection, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  // Handle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Handle pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Handle select all
  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedOrders(new Set(currentOrders.map((order, idx) => `${order.id}-${startIndex + idx}`)));
    } else {
      setSelectedOrders(new Set());
    }
  };

  // Handle individual selection
  const handleSelectOrder = (orderKey, checked) => {
    const newSelected = new Set(selectedOrders);
    if (checked) newSelected.add(orderKey);
    else newSelected.delete(orderKey);
    setSelectedOrders(newSelected);
  };

  // Helper: get avatar url by user name or null
  const getAvatarForUser = (userName) => USER_AVATARS[userName] ?? null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Order List</h1>

      {/* Toolbar */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowAddModal(true)}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg"
            title="Add New Order"
          >
            <img src={plus} alt="Add" className="w-5 h-5" />
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg ${showFilters ? 'bg-gray-200 dark:bg-gray-600' : 'hover:bg-gray-200 dark:hover:bg-gray-600'}`}
            title="Filter Orders"
          >
            <img src={filter} alt="Filter" className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              if (sortField === '') {
                setSortField('id');
                setSortDirection('asc');
              } else {
                setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
              }
            }}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg"
            title="Sort Orders"
          >
            <img src={sort} alt="Sort" className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
              <img
      src={search}
      alt="Shortcut"
      className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
    />

        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <button
              onClick={() => {
                setStatusFilter('all');
                setSearchTerm('');
                setShowFilters(false);
              }}
              className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead className="border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="text-left py-4 px-6 font-medium text-gray-500 dark:text-gray-400 text-sm">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  checked={currentOrders.every((o, idx) => selectedOrders.has(`${o.id}-${startIndex + idx}`))}
                />
              </th>
              <th className="text-left py-4 px-6 font-medium text-gray-500 dark:text-gray-400 text-sm">Order ID</th>
              <th className="text-left py-4 px-6 font-medium text-gray-500 dark:text-gray-400 text-sm">User</th>
              <th className="text-left py-4 px-6 font-medium text-gray-500 dark:text-gray-400 text-sm">Project</th>
              <th className="text-left py-4 px-6 font-medium text-gray-500 dark:text-gray-400 text-sm">Address</th>
              <th className="text-left py-4 px-6 font-medium text-gray-500 dark:text-gray-400 text-sm">Date</th>
              <th className="text-left py-4 px-6 font-medium text-gray-500 dark:text-gray-400 text-sm">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {currentOrders.map((order, idx) => {
              const rowKey = `${order.id}-${startIndex + idx}`;
              const avatarUrl = getAvatarForUser(order.user);

              return (
                <tr
                  key={rowKey}
                  className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${order.highlighted ? 'bg-gray-50 dark:bg-gray-700/30' : ''}`}
                >
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedOrders.has(rowKey)}
                      onChange={(e) => handleSelectOrder(rowKey, e.target.checked)}
                    />
                  </td>

                  <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">{order.id}</td>

                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      {avatarUrl ? (
                        <img src={avatarUrl} alt={order.user} className="w-6 h-6 rounded-full" />
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{getInitials(order.user)}</span>
                        </div>
                      )}
                      <span className="text-sm text-gray-900 dark:text-white">{order.user}</span>
                    </div>
                  </td>

                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-white">{order.project}</td>

                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-2">
                      <span>{order.address}</span>
                      {/* {order.address.includes("Nest Lane") && (
                        <img src={iconDocument} alt="Document" className="w-4 h-4" />
                      )} */}
                    </div>
                  </td>

                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-2">
                      <img src={iconCalendar} alt="Calendar" className="w-4 h-4" />
                      <span>{order.date}</span>
                    </div>
                  </td>

                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${order.statusDot}`} />
                      <span className={`text-sm font-medium ${order.statusColor}`}>{order.status}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Info and Controls */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        {/* Left side - Pagination Info */}
        <div className="flex items-center space-x-6">
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredOrders.length)} of {filteredOrders.length} results
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Items per page:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-md hover:bg-gray-100"
          >
            <img src={left} alt="Previous" className="w-9 h-9" />
          </button>

          {/* Page Numbers - Sliding Pagination */}
          {(() => {
            const maxVisiblePages = 5;
            const pages = [];

            if (totalPages <= maxVisiblePages) {
              for (let i = 1; i <= totalPages; i++) {
                pages.push(
                  <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      currentPage === i
                        ? 'bg-gray-200 text-gray-900 border border-gray-300 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {i}
                  </button>
                );
              }
            } else {
              let startPage, endPage;

              if (currentPage <= 3) {
                startPage = 1;
                endPage = Math.min(5, totalPages);
              } else if (currentPage >= totalPages - 2) {
                startPage = Math.max(1, totalPages - 4);
                endPage = totalPages;
              } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
              }

              for (let i = startPage; i <= endPage; i++) {
                pages.push(
                  <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      currentPage === i
                        ? 'bg-gray-200 text-gray-900 border border-gray-300 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {i}
                  </button>
                );
              }
            }

            return pages;
          })()}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-md hover:bg-gray-100"
          >
            <img src={right} alt="Next" className="w-9 h-9" />
          </button>
        </div>
      </div>

      {/* Add Order Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Order</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">User</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter user name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter address"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Add Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersList;
