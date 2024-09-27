import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOffer } from '../services/api';

function CreateOffer() {
  const navigate = useNavigate();
  const [offerData, setOfferData] = useState({
    name: '',
    clientName: '',
    ctaText: '',
    startDate: '',
    endDate: '',
    redirectUrl: '',
    backgroundImageUrl: '',
    clientLogoUrl: '',
    textLine1: '',
    textLine2: '',
    textLine3: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOfferData({ ...offerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOffer(offerData);
      navigate('/');
    } catch (error) {
      console.error('Error creating offer:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Create Offer</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Offer Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={offerData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
              Client Name
            </label>
            <input
              type="text"
              name="clientName"
              id="clientName"
              value={offerData.clientName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          {/* Add more form fields here */}
          <div>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateOffer;