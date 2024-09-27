import React from 'react';

function OfferCard({ offer }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{offer.name}</h3>
        <img src={offer.clientLogoUrl} alt={offer.clientName} className="w-16 h-16 object-contain" />
      </div>
      <p className="text-gray-600 mb-2">Client: {offer.clientName}</p>
      <p className="text-gray-600 mb-2">Status: {offer.status}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Edit Offer
      </button>
    </div>
  );
}

export default OfferCard;