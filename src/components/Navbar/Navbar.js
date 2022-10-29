import React, { useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLoader } from '../../redux/loader/loader-actions';

export default function Navbar() {
  const dispatch = useDispatch();

  useEffect(() => {
    const arrLinks = document.querySelectorAll('.nav__link');
    arrLinks.forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        dispatch(changeLoader(false));
        setTimeout(() => {
          window.location.replace(e.target.href);
        }, 1000);
      });
    });
  }, []);

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
            Секції
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/u" className="nav__link">
            Замагання
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="teachers" className="nav__link">
            Викладачі
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
