// UserLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'; // User Header
import Footer from './components/Footer'; // User Footer

const UserLayout = ({ language, setLanguage }) =>  {
  return (
    <>
          <Header language={language} setLanguage={setLanguage} />
      <main>
        <Outlet /> {/* User pages content will be rendered here */}
      </main>
      <Footer /> {/* User Footer */}
    </>
  );
};

export default UserLayout;
