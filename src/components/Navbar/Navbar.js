import React from 'react';
import './Navbar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLoader } from '../../redux/loader/loader-actions';
import { navList } from '../db/linksArr';

export default function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickLink = e => {
    e.preventDefault();
    if (location.pathname === `/${e.target.dataset.url}`) {
      return;
    }
    dispatch(changeLoader(false));
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
      navigate(`${e.target.dataset.url}`);
    }, 1000);
  };
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navList.map(({ title, url }) => (
          <li key={title} className="nav__item">
            <NavLink
              to={url}
              data-url={url}
              className="nav__link"
              onClick={clickLink}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
