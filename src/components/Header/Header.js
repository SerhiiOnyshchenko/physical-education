import React from 'react';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__container">
          <a href="/">
            <div className="logo"></div>
          </a>
          <Navbar />
        </div>
      </Container>
    </header>
  );
}
