import React from 'react';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__container">
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <Navbar />
        </div>
      </Container>
    </header>
  );
}
