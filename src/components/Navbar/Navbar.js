import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="history" className="nav__link">
            Історія
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Культовість
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Унікальність
          </Link>
        </li>
        <li className="nav__item">
          <Link to="teachers" className="nav__link">
            викладачі
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Detox
          </Link>
        </li>
        <li className="nav__item">
          <Link to="contacts" className="nav__link">
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  );
}
