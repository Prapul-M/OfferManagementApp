import React from 'react';
import Header from '../components/Header';

function Settings() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
        {/* Add settings form here */}
      </main>
    </div>
  );
}

export default Settings;