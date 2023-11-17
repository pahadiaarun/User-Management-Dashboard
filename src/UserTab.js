// src/UserTab.js
import React, { useState } from 'react';
import userData from './data.json'; // Import the JSON file

const UserTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = userData.users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="mt-4 p-6 bg-white rounded-md shadow-md">
      <input
        type="text"
        placeholder="Search by username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr
              key={user.id}
              onClick={() => handleUserClick(user)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md">
            <p className="font-bold text-lg mb-2">User Report for: {selectedUser.username}</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p>
                <span className="font-semibold">ID:</span> {selectedUser.id}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {selectedUser.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {selectedUser.phone}
              </p>
              <p>
                <span className="font-semibold">Creation Date:</span> {selectedUser.creationDate}
              </p>
              {/* Add more details or actions here */}
            </div>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTab;
