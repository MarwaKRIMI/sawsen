import React from 'react';
import Messages from '../message-box/mesaage-box-modal'
import UserProfile from '../user-profile/user-profile-modal'
import './navbar-user.css';

const Navbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
        <div className="toolbar_navigation_left">
          <div className="toolbar_logo"><a href="/home-user">MAISON <strong>JEUNES</strong></a></div>
       
          <div className="toolbar_navigation-items">
            <ul className="toolbar_navigation-items-left">
              <li style={{width: "100px",
    paddingLeft: "8%"}}><a href="#à propos">A props</a></li>
              <li><a href="#clubs">Clubs</a></li>
              <li><a href="#evenement">Evénements</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          </div>
        <div className="toolbar_navigation_rigth">
            <ul className="toolbar_navigation-items-right">
                <li><a href="#"><UserProfile/></a></li>
                <li><a href="#"><Messages/></a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Navbar;