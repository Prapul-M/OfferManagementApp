import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

// Mock function for creating/updating an offer
const saveOffer = async (offerData, isEditMode) => {
  console.log(`${isEditMode ? 'Updating' : 'Creating'} offer:`, offerData);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, message: `Offer ${isEditMode ? 'updated' : 'created'} successfully` };
};

function CreateOffer() {
  const location = useLocation();
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

  const isEditMode = location.state?.editMode;

  useEffect(() => {
    if (isEditMode && location.state?.offerDetails) {
      setOfferData(location.state.offerDetails);
    }
  }, [location, isEditMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOfferData({ ...offerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await saveOffer(offerData, isEditMode);
      if (result.success) {
        console.log(result.message);
        navigate('/');
      } else {
        console.error('Error saving offer:', result.message);
      }
    } catch (error) {
      console.error('Error saving offer:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditMode ? 'Edit Offer' : 'Create New Offer'}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {isEditMode ? 'Modify your offer and preview the changes.' : 'Design your perfect offer and preview it in real-time.'}
            </p>
          </div>
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
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
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                  ))}
                  <div className="flex justify-between pt-5">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {isEditMode ? 'Update Offer' : 'Create Offer'}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Preview Section */}
              <div className="bg-gray-100 p-8">
                <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">Offer Preview</h2>
                <div className="relative bg-cover bg-center h-96 rounded-lg overflow-hidden shadow-sm" style={{backgroundImage: `url(${offerData.backgroundImageUrl || 'https://via.placeholder.com/800x600?text=Your+Offer+Background'})`}}>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
                    {offerData.clientLogoUrl && (
                      <img src={offerData.clientLogoUrl} alt="Client Logo" className="w-24 h-24 object-contain mb-4 rounded-full bg-white p-2" />
                    )}
                    <h3 className="text-2xl font-bold mb-2 text-center">{offerData.name || 'Your Offer Name'}</h3>
                    <p className="text-lg mb-1 text-center">{offerData.textLine1 || 'First line of your offer'}</p>
                    <p className="text-lg mb-1 text-center">{offerData.textLine2 || 'Second line of your offer'}</p>
                    <p className="text-lg mb-4 text-center">{offerData.textLine3 || 'Third line of your offer'}</p>
                    <button className="bg-blue-600 text-white py-2 px-6 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                      {offerData.ctaText || 'Call to Action'}
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600 bg-white rounded-md p-4 shadow-sm">
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
    </div>
  );
}

export default CreateOffer;