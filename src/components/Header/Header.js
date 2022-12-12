import React from 'react';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { changeLoader } from '../../redux/loader/loader-actions';
import { useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const clickLink = e => {
    if (location.pathname === '/') {
      return;
    }
    e.preventDefault();
    dispatch(changeLoader(false));
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
      navigate('/');
    }, 1000);
  };
  return (
    <header className="header">
      <Container>
        <div className="header__container">
          <NavLink to="/" onClick={clickLink}>
            <div className="logo"></div>
          </NavLink>
          <Navbar />
        </div>
      </Container>
    </header>
  );
}
