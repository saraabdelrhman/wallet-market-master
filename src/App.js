import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import translate from './Data.json'; // Import translation data

// User Components
import UserLayout from './UserLayout';  // Layout for user with Header and Footer
import About from './components/About';
import Contact from './components/Contact';
import Content from './components/Content';
import Login from './components/Login';
import Register from './components/Register';
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
import Thanks from './components/Thanks';
import Reset from './components/Reset';
import Desktop from './components/Desktop';

// Admin Components
import AdminLayout from './admin/AdminLayout'; // Layout for admin with Navbar only
import User from './admin/User';
import AdminProducts from './admin/Products';
import Singleuser from './admin/Singleuser';
import Category from './admin/Category';
import Comment from './admin/Comment';
import Report from './admin/Report';
import Review from './admin/Review';
import Useredit from './admin/Edit&Delete/Useredit';
import Productedit from './admin/Edit&Delete/Productedit';
import Productview from './admin/Edit&Delete/Productview';
import Categoryedit from './admin/Edit&Delete/Categoryedit';
import Categoryview from './admin/Edit&Delete/Categoryview';
import Reviewedit from './admin/Edit&Delete/Reviewedit';
import Reviewview from './admin/Edit&Delete/Reviewview';
import Commentedit from './admin/Edit&Delete/Commentedit';
import Commentview from './admin/Edit&Delete/Commentview';
import Reportedit from './admin/Edit&Delete/Reportedit';
import Reportview from './admin/Edit&Delete/Reportview';
import Newuser from './admin/Newuser';
import AdminNotFound from './admin/NotFound';
import Newreport from './admin/Newreport';
import Newcomment from './admin/Newcomment';
import Newcategory from './admin/Newcategory';
import Newreview from './admin/Newreview';
import Newproducts from './admin/Newproducts';
import Role from './admin/Role';
import Roleedit from './admin/Edit&Delete/Roleedit';
import Roleview from './admin/Edit&Delete/Roleview';
import Permissionsedit from './admin/Edit&Delete/Permissionsedit';
import Permissionsview from './admin/Edit&Delete/Permissionsview';
import Newrole from './admin/Newrole';
import Permissions from './admin/Permissions';
import Newpermissions from './admin/Newpermission';
import AdminLogin from './admin/Login';
import Advertisment from './admin/Advertisment';
import TopRate from './components/Top-rate';

function App() {
  const [language, setLanguage] = useState('English');
  const [content, setContent] = useState({}); // to store the language-specific content

  useEffect(() => {
    // Fetch the data based on the selected language
    if (language === 'English') {
      setContent(translate.English);
    } else if (language === 'German') {
      setContent(translate.German);
    } else if (language === 'Swedish') {
      setContent(translate.Swedish);
    } else if (language === 'Spanish') {
      setContent(translate.Spanish);
    } else if (language === 'French') {
      setContent(translate.French);
    }
  }, [language]);

  return (
    <Router>
      <div className="App">
        {/* No need to include Header here if it is already inside UserLayout */}

        <Routes>
          {/* User Routes with Header and Footer */}
          <Route element={<UserLayout language={language} setLanguage={setLanguage} />}>
            <Route path="/" element={<Head   content={content}/>} />
            <Route path="/about" element={<About content={content} />} />
            <Route path="/contact" element={<Contact content={content}/>} />
            <Route path="/login" element={<Login content={content}/>} />
            <Route path="/register" element={<Register content={content} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<Editprofile />} />
            <Route path="/products/:productId/reviews" element={<Reviews  content={content}/>} />
            <Route path="/products/:productId" element={<Singleproduct />} />
            <Route path="/reviews" element={<Reviews  content={content} />} />
            <Route path="/categories" element={<Categories content={content} />} />
            <Route path="/categoriesdetails" element={<Categoriesdetails  content={content}/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/forgotpass" element={<Forgotpass content={content} />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/content" element={<Content />} />
            <Route path="/desktop" element={<Desktop />} />
            <Route path="/toprate" element={<TopRate  content={content}  />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin Routes with only Navbar */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/singleuser" element={<Singleuser />} />
            <Route path="/admin/comment" element={<Comment />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/report" element={<Report />} />
            <Route path="/admin/review" element={<Review />} />
            <Route path="/admin/useredit" element={<Useredit />} />
            <Route path="/admin/productedit" element={<Productedit />} />
            <Route path="/admin/productview" element={<Productview />} />
            <Route path="/admin/categoryedit" element={<Categoryedit />} />
            <Route path="/admin/categoryview" element={<Categoryview />} />
            <Route path="/admin/reviewedit" element={<Reviewedit />} />
            <Route path="/admin/reviewview" element={<Reviewview />} />
            <Route path="/admin/commentedit" element={<Commentedit />} />
            <Route path="/admin/commentview" element={<Commentview />} />
            <Route path="/admin/reportedit" element={<Reportedit />} />
            <Route path="/admin/reportview" element={<Reportview />} />
            <Route path="/admin/newuser" element={<Newuser />} />
            <Route path="/admin/newreport" element={<Newreport />} />
            <Route path="/admin/newcomment" element={<Newcomment />} />
            <Route path="/admin/newcategory" element={<Newcategory />} />
            <Route path="/admin/newreview" element={<Newreview />} />
            <Route path="/admin/newproducts" element={<Newproducts />} />
            <Route path="/admin/role" element={<Role />} />
            <Route path="/admin/roleedit" element={<Roleedit />} />
            <Route path="/admin/roleview" element={<Roleview />} />
            <Route path="/admin/newrole" element={<Newrole />} />
            <Route path="/admin/permissions" element={<Permissions />} />
            <Route path="/admin/permissionsedit" element={<Permissionsedit />} />
            <Route path="/admin/permissionsview" element={<Permissionsview />} />
            <Route path="/admin/newpermissionsview" element={<Newpermissions />} />
            <Route path="/admin/advertisment" element={<Advertisment />} />
            <Route path="*" element={<AdminNotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
