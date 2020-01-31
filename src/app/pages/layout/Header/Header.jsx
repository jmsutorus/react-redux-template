import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const link = {
  margin: '6px'
};

function Header() {
  return (
    <nav className="header" title="header">
      <Link style={link} to="/products">
        Products
      </Link>
      <Link style={link} to="/home">
        Home
      </Link>
    </nav>
  );
}

export default Header;
