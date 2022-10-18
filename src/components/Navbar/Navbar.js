import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="nav__link">
            Історія
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Культовість
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Унікальність
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            викладачі
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Detox
          </a>
        </li>
      </ul>
    </nav>
  );
}
