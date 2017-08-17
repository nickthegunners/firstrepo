import React, {Component} from 'react';
import './style.css';

import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
      <Link to="/page4">Page 4</Link>
    </div>
  );
}

export default Navbar;