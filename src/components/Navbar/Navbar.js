import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="history" className="nav__link">
            Історія
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/k" className="nav__link">
            Культовість
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/u" className="nav__link">
            Унікальність
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="teachers" className="nav__link">
            викладачі
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/d" className="nav__link">
            Detox
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="contacts" className="nav__link">
            Контакти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
