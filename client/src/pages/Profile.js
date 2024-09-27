import React from 'react';
import Header from '../components/Header';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        {/* Add profile information and edit form here */}
      </main>
    </div>
  );
}

export default Profile;