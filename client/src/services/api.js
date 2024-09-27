import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getOffers = () => api.get('/offers');
export const createOffer = (offerData) => api.post('/offers', offerData);
export const updateOffer = (id, offerData) => api.put(`/offers/${id}`, offerData);
export const deleteOffer = (id) => api.delete(`/offers/${id}`);

export default api;