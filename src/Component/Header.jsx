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
    <div className="hed-header">
      <div className="hed-menu-button" onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} className="hed-menu-icon" />
      </div>
      <button className="hed-logo-button" onClick={handleAdventureClick}>
        Adventure Works
      </button>
      <div className="hed-search-bar">
        <FontAwesomeIcon icon={faSearch} className="hed-search-icon" />
        <input type="text" placeholder="Search Adventure Works" />
      </div>
      <div className="hed-nav-links">
        <button onClick={handleSelectStore}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="hed-location-icon" />
          <span className="hed-button-text">Store Locator</span>
        </button>
        <button onClick={handleSignIn}>
          <FontAwesomeIcon icon={faSignInAlt} className="hed-signin-icon" />
          <span className="hed-button-text">Sign In</span>
        </button>
        <button onClick={handleCart}>
          <FontAwesomeIcon icon={faShoppingCart} className="hed-cart-icon" />
        </button>
        <button onClick={handleSite}>
          <span className="hed-button-text">Site</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
