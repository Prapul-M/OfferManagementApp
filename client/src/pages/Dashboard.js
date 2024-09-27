import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Mock data for demonstration
  const offers = [
    { id: 1, name: 'iPhone Summer Promotion', clientName: 'Apple', status: 'Active', createdBy: 'john@example.com', creationDate: '2023-05-01' },
    { id: 2, name: 'Windows 11 Launch Deal', clientName: 'Microsoft', status: 'Pending', createdBy: 'jane@example.com', creationDate: '2023-05-15' },
    { id: 3, name: 'Prime Day Special', clientName: 'Amazon', status: 'Expired', createdBy: 'bob@example.com', creationDate: '2023-04-20' },
    { id: 4, name: 'Google Workspace Discount', clientName: 'Google', status: 'Active', createdBy: 'alice@example.com', creationDate: '2023-03-10' },
    { id: 5, name: 'Meta Quest VR Bundle', clientName: 'Facebook', status: 'Pending', createdBy: 'david@example.com', creationDate: '2023-08-01' },
    { id: 6, name: 'Model 3 Test Drive Event', clientName: 'Tesla', status: 'Active', createdBy: 'emma@example.com', creationDate: '2023-11-20' },
    { id: 7, name: 'Galaxy Unpacked Presale', clientName: 'Samsung', status: 'Expired', createdBy: 'frank@example.com', creationDate: '2023-02-01' },
    { id: 8, name: 'IBM Cloud Migration Offer', clientName: 'IBM', status: 'Active', createdBy: 'grace@example.com', creationDate: '2023-06-15' },
    { id: 9, name: 'Share a Coke Campaign', clientName: 'Coca-Cola', status: 'Pending', createdBy: 'henry@example.com', creationDate: '2023-09-05' },
    { id: 10, name: 'Nike Air Max Day', clientName: 'Nike', status: 'Active', createdBy: 'isabel@example.com', creationDate: '2023-12-01' }
  ];

  // State for profile dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Calculate metrics
  const totalOffers = offers.length;
  const activeOffers = offers.filter(offer => offer.status === 'Active').length;
  const expiredOffers = offers.filter(offer => offer.status === 'Expired').length;
  const pendingOffers = offers.filter(offer => offer.status === 'Pending').length;

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header with Profile Icon */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <div className="relative">
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center text-sm font-medium text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
              >
                <img
                  className="h-10 w-10 rounded-full border-2 border-white"
                  src="https://example.com/placeholder-avatar.jpg"
                  alt="User avatar"
                />
                <span className="ml-2 hidden md:inline">John Doe</span>
                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Offers', value: totalOffers, color: 'bg-blue-500' },
            { title: 'Active Offers', value: activeOffers, color: 'bg-green-500' },
            { title: 'Expired Offers', value: expiredOffers, color: 'bg-red-500' },
            { title: 'Pending Offers', value: pendingOffers, color: 'bg-yellow-500' },
          ].map((metric, index) => (
            <div key={index} className={`${metric.color} rounded-lg shadow-lg p-6 text-white`}>
              <h2 className="text-lg font-semibold mb-2">{metric.title}</h2>
              <p className="text-4xl font-bold">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Create New Offer Button */}
        <div className="mb-8">
          <Link
            to="/create-offer"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Create New Offer
          </Link>
        </div>

        {/* Offers Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Recent Offers</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['Offer Name', 'Created By', 'Creation Date', 'Status', 'Actions'].map((header, index) => (
                    <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {offers.map((offer) => (
                  <tr key={offer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{offer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{offer.createdBy}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{offer.creationDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        offer.status === 'Active' ? 'bg-green-100 text-green-800' :
                        offer.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {offer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</a>
                      <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Previous Offers Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Previous Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ...offers,
              { id: 11, name: 'Corolla Hybrid Launch', clientName: 'Toyota', status: 'Expired', createdBy: 'alice@example.com', creationDate: '2023-03-10' },
              { id: 12, name: 'Band-Aid Brand Awareness', clientName: 'Johnson & Johnson', status: 'Active', createdBy: 'david@example.com', creationDate: '2023-08-01' },
              { id: 13, name: 'Tide Pods Free Trial', clientName: 'Procter & Gamble', status: 'Pending', createdBy: 'emma@example.com', creationDate: '2023-11-20' },
              { id: 14, name: 'Pepsi Max Taste Challenge', clientName: 'PepsiCo', status: 'Expired', createdBy: 'frank@example.com', creationDate: '2023-02-01' },
              { id: 15, name: 'PlayStation Plus Discount', clientName: 'Sony', status: 'Active', createdBy: 'grace@example.com', creationDate: '2023-06-15' },
              { id: 16, name: 'Solar Roof Installation Promo', clientName: 'Tesla', status: 'Pending', createdBy: 'henry@example.com', creationDate: '2023-09-05' }
            ].map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-indigo-600 font-bold text-xl">{offer.clientName.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{offer.name}</h3>
                      <p className="text-sm text-gray-600">{offer.clientName}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      offer.status === 'Active' ? 'bg-green-100 text-green-800' :
                      offer.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {offer.status}
                    </span>
                    <span className="text-xs text-gray-500">{offer.creationDate}</span>
                  </div>
                  <button className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                    Edit Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;