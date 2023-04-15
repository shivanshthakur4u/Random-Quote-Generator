import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Logo from "../Images/Logo.png"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img alt='logo' src={Logo}
          />
        </Link>

        <div className={showNav ? 'navbar-menu active' : 'navbar-menu'}>
          <ul className="navbar-items">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/bookmarks" className="navbar-link">
                Bookmarks
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-toggle" onClick={toggleNav}>
  <FontAwesomeIcon className='fas' icon={showNav ? faTimes : faBars} />
</div>

      </div>
    </nav>
  );
};

export default Navbar;
