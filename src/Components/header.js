import React from 'react';
import '../Styles/header.css';
import { Link, Element } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <nav>
        <h2 className="logo">Kendall Hunt</h2>
        <ul className="nav-links">
        <li>
          <Link to="about" smooth={true} duration={500} className="bannerButton">About</Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} className="bannerButton">Work</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="bannerButton">Skills</Link>
        </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
