import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-screen w-3/5 p-4">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2">
          <a href="#produk" className="text-blue-600 hover:underline">Produk</a>
        </li>
        <li className="mb-2">
          <a href="#user-list" className="text-blue-600 hover:underline">User List</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
