import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div>
      {/* <div className='footer-icons'>
        <div>
          <i className="fa-solid fa-location-dot"></i>
          <h2>Find a Store</h2>
        </div>
        <div>
          <i className="fa-thin fa-phone"></i>
          <h2>Customer Service</h2>
        </div>
        <div>
          <i className="fa-light fa-comment"></i>
          <h2>Need Help?</h2>
        </div>
        <div>
          <i className="fa-light fa-circle-question"></i>
          <h2>Covid-19 Information</h2>
        </div>
      </div> */}
      <hr></hr>
      <div className='nav-top'>
        <div className='nav-main'>
          <h3>About</h3>
          <div>Our Story</div><br></br>
          <div>Sustainability</div><br></br>
          <div>Products</div><br></br>
          <div>B2B Self Service</div><br></br>
          <div>Careers</div>
        </div>
        <div className='nav-main'>
          <h3>Help</h3>
          <div>Return Policy</div><br></br>
          <div>Shipping</div><br></br>
          <div>Curbside Pickup</div><br></br>
          <div>Accessibility</div><br></br>
          <div>Terms and Conditions</div><br></br>
        </div>
        <div className='nav-main'>
          <h3>My AW</h3>
          <div>My Account</div><br></br>
          <div>Order Status</div><br></br>
          <div>Gift Cards</div><br></br>
          <div>Wishlist</div><br></br>
          <div>Rewards</div>
        </div>
        <div className='nav-main'>
          <h3>Customer Service</h3>
          <div>Contact us</div><br></br>
          <div>FAQ</div>
        </div>
        <div className='nav-main'>
          <h3>Classes & Events</h3>
          <div>Upcoming Classes & Events</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;