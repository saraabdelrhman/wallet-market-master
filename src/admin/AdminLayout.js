// src/admin/AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';  // Correct path to Navbar.js

const AdminLayout = () => {
  return (
    <>
      <Navbar /> {/* Admin Navbar */}
      <main>
        <Outlet /> {/* Admin pages content will be rendered here */}
      </main>
    </>
  );
};

export default AdminLayout;
