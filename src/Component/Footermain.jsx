import React from 'react';
import './Footermain.css'
function Footermain() {
  return (
    <div className='Footermain'>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <img src="https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1BcU?ver=5de2&m=6&q=80" /> 
          
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">© Adventure Works, 2021 All rights reserved</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Terms of Use</a>
          </li>
          <li className="nav-item">
            <span className="nav-link">|</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Privacy Policy</a>
          </li>
          <li className="nav-item ml-auto">
            <a className="nav-link" href="#" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footermain;