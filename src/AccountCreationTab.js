// src/AccountCreationTab.js
import React, { useState } from 'react';

const AccountCreationTab = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Dummy request handling (replace with actual API call)
    console.log('Creating account:', { username, password });
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="mt-4 p-6 bg-white rounded-md shadow-md max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-semibold text-gray-600 mb-1">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-1">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
      >
        Create Account
      </button>
    </form>
  );
};

export default AccountCreationTab;
