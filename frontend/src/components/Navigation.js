import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Product Table</Link>
        </li>
        <li>
          <Link to="/form">Product Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;