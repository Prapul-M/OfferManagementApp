import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

// Add this import at the top of the file
import { getClientLogo } from '../utils/logoHelper';

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

  // Calculate metrics
  const totalOffers = offers.length;
  const activeOffers = offers.filter(offer => offer.status === 'Active').length;
  const expiredOffers = offers.filter(offer => offer.status === 'Expired').length;
  const pendingOffers = offers.filter(offer => offer.status === 'Pending').length;

  const navigate = useNavigate();

  // Function to handle edit button click
  const handleEditOffer = (offer) => {
    // Navigate to the Create Offer page with offer details as state
    navigate('/create-offer', { state: { editMode: true, offerDetails: offer } });
  };

  const handleImageError = (e, clientName) => {
    console.error(`Failed to load image for ${clientName}`);
    e.target.src = '/OfferManagementApp/client/src/images/SunRun.png'; // Set a default logo
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Offers', value: totalOffers, color: 'bg-blue-100 text-blue-800' },
            { title: 'Active Offers', value: activeOffers, color: 'bg-green-100 text-green-800' },
            { title: 'Expired Offers', value: expiredOffers, color: 'bg-red-100 text-red-800' },
            { title: 'Pending Offers', value: pendingOffers, color: 'bg-yellow-100 text-yellow-800' },
          ].map((metric, index) => (
            <div key={index} className={`${metric.color} rounded-lg shadow-sm p-6`}>
              <h2 className="text-lg font-semibold mb-2">{metric.title}</h2>
              <p className="text-4xl font-bold">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Create New Offer Button */}
        <div className="mb-8">
          <Link
            to="/create-offer"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Create New Offer
          </Link>
        </div>

        {/* Offers Table */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8">
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
                      <button
                        onClick={() => handleEditOffer(offer)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Edit
                      </button>
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
              { id: 16, name: 'Solar Roof Installation Promo', clientName: 'SunRun', status: 'Pending', createdBy: 'henry@example.com', creationDate: '2023-09-05' }
            ].map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition duration-300 ease-in-out hover:shadow-md">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      <img
                        src={getClientLogo(offer.clientName)}
                        alt={`${offer.clientName} logo`}
                        className="w-10 h-10 object-contain"
                        onError={(e) => handleImageError(e, offer.clientName)}
                      />
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
                  <button
                    onClick={() => handleEditOffer(offer)}
                    className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                  >
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