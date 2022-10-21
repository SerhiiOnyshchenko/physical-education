import React from 'react';
import './HistoryPage.css';
import Container from './../Container/Container';
import ButtonDown from '../ButtonDown/ButtonDown';

export default function HistoryPage() {
  return (
    <div className="HistoryPage">
      <section className="HistoryPage__section-1">
        <Container>
          <h1 className="HistoryPage__title">
            <span className="HistoryPage__title-text1">жива</span>
            <span className="HistoryPage__title-text2">легенда</span>
            <span className="HistoryPage__title-text2">грузії</span>
          </h1>
        </Container>
        <ButtonDown />
      </section>
      <section className="HistoryPage__section-2">
        <Container>
          <h2 className="HistoryPage__title2">
            <span className="HistoryPage__title-text1">жива</span>
            <span className="HistoryPage__title-text2">легенда</span>
            <span className="HistoryPage__title-text2">грузії</span>
          </h2>
        </Container>
      </section>
    </div>
  );
}
