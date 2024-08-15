import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Head from './components/Head'; 
import Smartphones from './components/Smartphones';
import Kitchen from './components/Kitchen'; 
import Edit from './components/Edit';
import SmartphonesDetails from './components/Smartphonesdetails';
import PhoneReview from './components/Phonereview'; // Updated import
function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="flex-shrink-0">
          <Routes>
            <Route path="/" element={<Head />} />  
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/smartphones" element={<Smartphones />} />
            <Route path="/kitchen" element={<Kitchen />} /> 
            <Route path="/edit" element={<Edit/>} />

            <Route path="/smartphones/:id" element={<SmartphonesDetails />} />
             <Route path="/phonereview" element={<PhoneReview />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


