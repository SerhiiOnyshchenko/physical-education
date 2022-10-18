import React from 'react';
import Container from '../Container/Container';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__container">
          © 2022, Київський міський медичний фаховий коледж
        </div>
      </Container>
    </footer>
  );
}
