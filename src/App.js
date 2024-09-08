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
import Smartphones from './components/Products';
import Editprofile from './components/Editprofile';
import Singleproduct from './components/Singleproduct';
import PhoneReview from './components/Reviews';
import Categories from './components/Categories';
import Products from './components/Products';
import NotFound from './components/Notfound';
import Reports from './components/Reports';
import Forgotpass from './components/Forgotpass';
import Reviews from './components/Mainreviews';
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
            <Route path="/editprofile" element={<Editprofile/>} />
        <Route path="/products/:productId/reviews" element={<Reviews/>} />
            <Route path="/products/:productId" element={<Singleproduct />} />
             <Route path="/phonereview" element={<PhoneReview />} />
             <Route path="/reviews" element={<PhoneReview />} />
             <Route path="/categories" element={<Categories/>} />
             <Route path="/Products" element={<Products/>} />
             <Route path="/Reports" element={<Reports/>} />
             <Route path="/Forgotpass" element={<Forgotpass/>} />


             <Route path='*' element={<NotFound/>}/>

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


