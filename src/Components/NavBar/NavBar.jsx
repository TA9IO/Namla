/* Importing the necessary components and libraries to make the navbar work. */
import React from "react";
import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";
import logo from "../../Assets/logo2.png";
import Notification from "./notification/Notification";
import "./navber.css";

function NavBar() {
  return (
    /* Creating a navbar with a logo. */
    <nav className='navbar'>
      <div className='image-container'>
        <Link to={"/"}>
          <img src={logo} alt='logo' />
        </Link>
      </div>

      <div className='navigation-menu'>
        <div className='navigation-menu-links'>
          {/* // Mapping through the navbarData array and returning the data in the array. */}
          {navbarData.map((item, index) => {
            return (
              <div className='navigation-menu-links-link' key={item.id}>
                {item.icon}
                <Link id='link' to={item.path}>
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
        {/* /* Creating the notification icon. */}
        <Notification />
      </div>
    </nav>
  );
}

export default NavBar;
