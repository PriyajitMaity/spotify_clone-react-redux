import React from "react";
import './Header.scss'

const Header = () => {
  return (
  <header>
    <nav>
    <div className="nav-back-btn">
        <button>
        <i className="fa-regular fa-less-than"></i>
        </button>
    </div>

    <div className="nav-items">
        <span>Explore Premium</span>
        <button className="nav-install">
             <i className="fa-solid fa-circle-down"></i>
             <p>Install App</p>
        </button>
        <button className="bell-button">
            <i className="fa-regular fa-bell"></i>
        </button>

    </div>
    </nav>
  </header>
  );
};

export default Header;
