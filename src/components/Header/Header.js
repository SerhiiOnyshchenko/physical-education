import React from 'react';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { changeLoader } from '../../redux/loader/loader-actions';
import { useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();

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
      window.location.replace('http://localhost:3000/physical-education');
    }, 1000);
  };
  return (
    <header className="header">
      <Container>
        <div className="header__container">
          <Link to="/" onClick={e => clickLink(e)}>
            <div className="logo"></div>
          </Link>
          <Navbar />
        </div>
      </Container>
    </header>
  );
}
