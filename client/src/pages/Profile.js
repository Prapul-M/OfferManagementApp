import React, { useState } from 'react';
import Header from '../components/Header';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Marketing Manager',
    company: 'TechCorp Inc.',
    bio: 'Experienced marketing professional with a passion for creating impactful digital campaigns.',
    avatar: 'https://example.com/avatar.jpg',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated user data to your backend
    console.log('Updated user data:', user);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Avatar</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <img src={user.avatar} alt="User avatar" className="h-24 w-24 rounded-full" />
                </dd>
              </div>
              {[
                { label: 'Full name', key: 'name' },
                { label: 'Email address', key: 'email' },
                { label: 'Role', key: 'role' },
                { label: 'Company', key: 'company' },
                { label: 'Bio', key: 'bio', type: 'textarea' },
              ].map((field) => (
                <div key={field.key} className={`${field.key % 2 === 0 ? 'bg-white' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                  <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {isEditing ? (
                      field.type === 'textarea' ? (
                        <textarea
                          name={field.key}
                          value={user[field.key]}
                          onChange={handleInputChange}
                          rows="3"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      ) : (
                        <input
                          type="text"
                          name={field.key}
                          value={user[field.key]}
                          onChange={handleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      )
                    ) : (
                      user[field.key]
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          {isEditing && (
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={handleSubmit}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Profile;