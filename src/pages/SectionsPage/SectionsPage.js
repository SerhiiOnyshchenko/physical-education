import React, { useEffect } from 'react';
import './SectionsPage.css';
import img from '../../images/coledge/10.jpg';
import ukrIlove from '../../images/ukraine-i-love.png';
import { changeLoader } from '../../redux/loader/loader-actions';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container/Container';
import ButtonDown from '../../components/ButtonDown/ButtonDown';

export default function SectionsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeLoader(true));
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="SectionsPage">
      <section className="SectionsPage__section-1">
        <Container>
          <h1 className="SectionsPage__title">
            <span className="SectionsPage__title-text1">секційна</span>
            <span className="SectionsPage__title-text2">робота</span>
          </h1>
        </Container>
        <ButtonDown />
      </section>
      <section className="SectionsPage__section-2">
        <Container>
          <h2 className="SectionsPage__title2">
            <span className="SectionsPage__title-text1">РОЗКРИВАЮЧИ</span>
            <span className="SectionsPage__title-text2">НАШУ</span>
            <span className="SectionsPage__title-text2">СПАДЩИНУ</span>
          </h2>
          <div className="SectionsPage__content">
            <div className="SectionsPage__box1">
              <img
                className="SectionsPage__img1"
                src={ukrIlove}
                alt="ukrIlove"
              />
              <div className="SectionsPage__box-text1">
                <h4>Наша історія</h4>
                <p>
                  Ми створили фірмовий паттерн надихаючись лініями і формами
                  Болнісського хреста, зображеного на грузинському прапорі. У
                  ньому символічно закодовано все те, що відображає саму суть
                  Borjomi.
                </p>
              </div>
            </div>
            <div className="SectionsPage__box2">
              <div className="SectionsPage__box-text2">
                <h4>Розкриваючи грузинську спадщину</h4>
                <p>
                  Дизайн поєднує сучасне письмо Мхедрулі з традиційними
                  шрифтами, що підкреслює грузинське походження. Крім того,
                  бренд можна впізнати за патентованим кольором Georgian Green
                  (грузинський зелений).
                </p>
              </div>
              <img className="SectionsPage__img2" src={img} alt="image2" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
