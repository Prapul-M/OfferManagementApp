import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
// Import your page components
import Dashboard from './pages/Dashboard';
import Offers from './pages/Offers';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import CreateOffer from './pages/CreateOffer';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/create-offer" element={<CreateOffer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;