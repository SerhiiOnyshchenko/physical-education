import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useRef, useState } from 'react';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { changeLoader } from '../../redux/loader/loader-actions';
import { useDispatch } from 'react-redux';
import MobileNav from 'components/MobileNav/MobileNav';

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [isOpen, setOpen] = useState(false);
  const headerScrollToDown = useRef();
  window.onscroll = () => scrollToDownFunction();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.body.className = 'body-opened';
      }, 1000);
    } else {
      document.body.className = '';
    }
  }, [isOpen]);

  function scrollToDownFunction() {
    if (isMobile) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerScrollToDown.current.style.backgroundColor = '#3d8685';
      } else {
        headerScrollToDown.current.style.backgroundColor = 'transparent';
      }
    } else {
      headerScrollToDown.current.style.backgroundColor = '#3d8685';
    }
  }
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
    <header className="header" ref={headerScrollToDown}>
      <Container>
        <div className="header__container">
          <NavLink className="header__logo-link" to="/" onClick={clickLink}>
            <div className="logo"></div>
          </NavLink>
          {!isMobile ? (
            <Navbar />
          ) : (
            <MobileNav isOpen={isOpen} setOpen={setOpen} />
          )}
        </div>
      </Container>
    </header>
  );
}
