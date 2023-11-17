// src/App.js
import React, { useState } from 'react';
import UserTab from './UserTab';
import AccountCreationTab from './AccountCreationTab';

function App() {
  const [activeTab, setActiveTab] = useState('userDetails');

  const tabButtonStyle = (tabName) =>
    `w-full px-4 py-2 ${
      activeTab === tabName
        ? 'bg-blue-500 hover:bg-blue-600 text-white'
        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="bg-indigo-800 text-white p-4 text-center w-full">
        <h1 className="text-3xl font-bold">User Management Dashboard</h1>
      </div>
      <div className="flex space-x-4 p-4 w-full">
        <button
          onClick={() => setActiveTab('userDetails')}
          className={tabButtonStyle('userDetails')}
        >
          User Details
        </button>
        <button
          onClick={() => setActiveTab('accountCreation')}
          className={tabButtonStyle('accountCreation')}
        >
          Account Creation
        </button>
      </div>
      <div className="flex-1 p-4 w-full">
        {activeTab === 'userDetails' && <UserTab />}
        {activeTab === 'accountCreation' && <AccountCreationTab />}
      </div>
    </div>
  );
}

export default App;
