import React, { createContext, useState, useContext } from 'react';

const OfferContext = createContext();

export const useOfferContext = () => useContext(OfferContext);

export const OfferProvider = ({ children }) => {
  const [offers, setOffers] = useState([]);

  const value = {
    offers,
    setOffers,
  };

  return <OfferContext.Provider value={value}>{children}</OfferContext.Provider>;
};