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

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Create New Offer</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">Design your perfect offer and preview it in real-time.</p>
        </div>
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'name', label: 'Offer Name', icon: '🏷️' },
                  { name: 'clientName', label: 'Client Name', icon: '👤' },
                  { name: 'ctaText', label: 'CTA Text', icon: '🔔' },
                  { name: 'startDate', label: 'Offer Start Date', type: 'date', icon: '📅' },
                  { name: 'endDate', label: 'Offer End Date', type: 'date', icon: '🏁' },
                  { name: 'redirectUrl', label: 'Redirect URL', type: 'url', icon: '🔗' },
                  { name: 'backgroundImageUrl', label: 'Background Image URL', type: 'url', icon: '🖼️' },
                  { name: 'clientLogoUrl', label: 'Client Logo URL', type: 'url', icon: '🎨' },
                  { name: 'textLine1', label: 'Text Line 1', icon: '📝' },
                  { name: 'textLine2', label: 'Text Line 2', icon: '📝' },
                  { name: 'textLine3', label: 'Text Line 3', icon: '📝' },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                      {field.icon} {field.label}
                    </label>
                    <input
                      type={field.type || 'text'}
                      name={field.name}
                      id={field.name}
                      value={offerData[field.name]}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                      required
                    />
                  </div>
                ))}
                <div className="flex justify-between pt-5">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    Create Offer
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex justify-center py-3 px-6 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            
            {/* Preview Section */}
            <div className="bg-gray-100 p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Offer Preview</h2>
              <div className="relative bg-cover bg-center h-96 rounded-lg overflow-hidden shadow-lg" style={{backgroundImage: `url(${offerData.backgroundImageUrl || 'https://via.placeholder.com/800x600?text=Your+Offer+Background'})`}}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
                  {offerData.clientLogoUrl && (
                    <img src={offerData.clientLogoUrl} alt="Client Logo" className="w-32 h-32 object-contain mb-6 rounded-full bg-white p-2" />
                  )}
                  <h3 className="text-3xl font-bold mb-4 text-center">{offerData.name || 'Your Offer Name'}</h3>
                  <p className="text-xl mb-2 text-center">{offerData.textLine1 || 'First line of your offer'}</p>
                  <p className="text-xl mb-2 text-center">{offerData.textLine2 || 'Second line of your offer'}</p>
                  <p className="text-xl mb-6 text-center">{offerData.textLine3 || 'Third line of your offer'}</p>
                  <button className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 transform hover:scale-105">
                    {offerData.ctaText || 'Call to Action'}
                  </button>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-600 bg-white rounded-lg p-4 shadow">
                <p><strong>Client:</strong> {offerData.clientName || 'Your Client'}</p>
                <p><strong>Start Date:</strong> {offerData.startDate || 'Not set'}</p>
                <p><strong>End Date:</strong> {offerData.endDate || 'Not set'}</p>
                <p><strong>Redirect URL:</strong> {offerData.redirectUrl || 'Not set'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOffer;