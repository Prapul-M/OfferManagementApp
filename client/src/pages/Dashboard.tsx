import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaClipboardCheck, FaClock, FaHourglassHalf, FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

const DashboardCard: React.FC<{ title: string; value: number; icon: React.ReactNode; color: string }> = ({ title, value, icon, color }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-l-4 ${color}`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <div className={`text-2xl ${color.replace('border-', 'text-')}`}>{icon}</div>
    </div>
    <p className="text-3xl font-bold text-gray-800">{value}</p>
  </div>
);

const OfferTable: React.FC = () => (
  <div className="overflow-x-auto">
    <div className="mb-4 flex justify-between items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search offers..."
          className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
        Add New Offer
      </button>
    </div>
    <table className="min-w-full bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 text-left">Offer Name</th>
          <th className="py-2 px-4 text-left">Created By</th>
          <th className="py-2 px-4 text-left">Creation Date</th>
          <th className="py-2 px-4 text-left">Status</th>
          <th className="py-2 px-4 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {[
          { name: "Summer Sale", createdBy: "john@example.com", date: "2023-06-01", status: "Active" },
          { name: "Back to School", createdBy: "jane@example.com", date: "2023-07-15", status: "Pending" },
          { name: "Black Friday", createdBy: "mike@example.com", date: "2023-11-20", status: "Expired" },
        ].map((offer, index) => (
          <tr key={index} className="border-b hover:bg-gray-50">
            <td className="py-2 px-4">{offer.name}</td>
            <td className="py-2 px-4">{offer.createdBy}</td>
            <td className="py-2 px-4">{offer.date}</td>
            <td className="py-2 px-4">
              <span className={`px-2 py-1 rounded text-sm ${
                offer.status === 'Active' ? 'bg-green-200 text-green-800' :
                offer.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                'bg-red-200 text-red-800'
              }`}>
                {offer.status}
              </span>
            </td>
            <td className="py-2 px-4">
              <button className="text-blue-500 hover:text-blue-700 mr-2"><FaEdit /></button>
              <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PreviousOfferBlock: React.FC<{ name: string; company: string }> = ({ name, company }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 mx-auto flex items-center justify-center text-2xl font-bold text-white">
      {company[0]}
    </div>
    <h3 className="text-lg font-semibold text-center mb-2">{name}</h3>
    <p className="text-sm text-gray-600 text-center mb-4">{company}</p>
    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
      Edit
    </button>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Offers" value={120} icon={<FaChartLine />} color="border-blue-500" />
        <DashboardCard title="Active Offers" value={45} icon={<FaClipboardCheck />} color="border-green-500" />
        <DashboardCard title="Expired Offers" value={30} icon={<FaClock />} color="border-red-500" />
        <DashboardCard title="Pending Offers" value={15} icon={<FaHourglassHalf />} color="border-yellow-500" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Offers Table</h2>
        <OfferTable />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Previous Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PreviousOfferBlock name="Spring Sale" company="ABC Corp" />
          <PreviousOfferBlock name="Summer Discount" company="XYZ Inc" />
          <PreviousOfferBlock name="Fall Promotion" company="123 Ltd" />
        </div>
      </div>

      <Link 
        to="/create-offer" 
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
      >
        <FaPlus className="mr-2" />
        <span>Create Offer</span>
      </Link>
    </div>
  );
};

export default Dashboard;