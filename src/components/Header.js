import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from '../components/images/logo-86.png';
import language from '../components/images/material-symbols_language (3).png'; // Assuming the image is in the right path

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path 
      ? { color: '#377bf7' } // Active color styling
      : {};
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={img}
            alt="Reveyou Logo"
            style={{ height: 40, marginRight: 10 }}
          />
          <span style={{ color: 'black', fontSize: 30, fontFamily: 'Poppins', fontWeight: 700 }}>
            Reveyou
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link className="nav-link" style={isActive('/')} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={isActive('/categories')} to="/categories">
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={isActive('/about')} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={isActive('/contact')} to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <img 
                src={language} 
                alt="Language Selector" 
                tabIndex={0}
                className=''
                style={{ cursor: 'pointer', height: '24px', marginRight: '10px' }}
              />
                <select
                style={{ 
                  width: '20px',
                  border: '0',
                  marginRight:'15px',
                  borderRadius: '5px',
                  backgroundColor: 'white'
                }}
              >
                <option value="English">English</option>
                <option value="Sweden">Sweden</option>
                <option value="Français">Français</option>
                <option value="български">български</option>
              </select>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <Link
              to="/login"
              style={{
                background: '#377BF7',
                borderRadius: 30,
                color: 'white',
                fontSize: 15,
                padding: '14px 16px',
                fontFamily: 'Inter',
                fontWeight: '600',
                letterSpacing: 0.07,
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                borderRadius: 30,
                border: '1px #377BF7 solid',
                color: '#3B82F6',
                fontSize: 15,
                padding: '14px 17px',
                fontFamily: 'Inter',
                fontWeight: '600',
                letterSpacing: 0.07,
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
