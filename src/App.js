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
import PhoneReview from './components/Phonereview';
import Categories from './components/Categories';
import Products from './components/Products';
import NotFound from './components/Notfound';
import Comments from './components/Comments';
import Reports from './components/Reports';
import Forgotpass from './components/Forgotpass';
import Notifications from './components/Notifications';
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
             <Route path="/reviews" element={<PhoneReview />} />
             <Route path="/categories" element={<Categories/>} />
             <Route path="/Products" element={<Products/>} />
             <Route path="/Comments" element={<Comments/>} />
             <Route path="/Reports" element={<Reports/>} />
             <Route path="/Forgotpass" element={<Forgotpass/>} />
             <Route path="/Notifications" element={<Notifications/>} />


             <Route path='*' element={<NotFound/>}/>

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


