import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faShoppingCart, faMapMarkerAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const handleAdventureClick = () => {
    console.log("Adventure Works clicked!");
  };
  
  const handleMenuClick = () => {
    console.log("Menu button clicked");
  }

  const handleSelectStore = () => {
    console.log("Select Store clicked!");
  };

  const handleSignIn = () => {
    console.log("Sign In clicked!");
  };

  const handleCart = () => {
    console.log("Cart clicked!");
  };

  const handleSite = () => {
    console.log("Site clicked!");
  };

  return (
    <div className="header">
      <div className="menu-button" onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </div>
      <button className="logo-button" onClick={handleAdventureClick}>
        Adventure Works
      </button>
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search Adventure Works" />
      </div>
      <div className="nav-links">
        <button onClick={handleSelectStore}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
          <span className="button-text">Store Locator</span>
        </button>
        <button onClick={handleSignIn}>
          <FontAwesomeIcon icon={faSignInAlt} className="signin-icon" />
          <span className="button-text">Sign In</span>
        </button>
        <button onClick={handleCart}>
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        </button>
        <button onClick={handleSite}>
          <span className="button-text">Site</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
