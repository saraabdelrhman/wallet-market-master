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
import Editprofile from './components/Editprofile';
import Singleproduct from './components/Singleproduct';
import Reviews from './components/Reviews';
import Categories from './components/Categories';
import Categoriesdetails from './components/Category-details';
import Products from './components/Products';
import NotFound from './components/Notfound';
import Reports from './components/Reports';
import Forgotpass from './components/Forgotpass';
import Reset from './components/Reset'; 
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
            <Route path="/editprofile" element={<Editprofile/>} />
        <Route path="/products/:productId/reviews" element={<Reviews/>} />
            <Route path="/products/:productId" element={<Singleproduct />} />
             <Route path="/reviews" element={<Reviews/>} />
             <Route path="/categories" element={<Categories/>} />
             <Route path="/categoriesdetails" element={<Categoriesdetails/>} />
             <Route path="/Products" element={<Products/>} />
             <Route path="/Reports" element={<Reports/>} />
             <Route path="/Forgotpass" element={<Forgotpass/>} />
             <Route path="/Reset" element={<Reset/>} />


             <Route path='*' element={<NotFound/>}/>

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


