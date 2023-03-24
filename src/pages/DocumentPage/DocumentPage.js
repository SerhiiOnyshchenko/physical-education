import React, { useEffect, useRef } from 'react';
import './DocumentPage.css';
import img from '../../images/documents/653c6f74ab89766d1ab5.png';
import img2 from '../../images/documents/d166bee0216f280fa0ef.png';
import { changeLoader } from '../../redux/loader/loader-actions';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container/Container';
import ButtonDown from '../../components/ButtonDown/ButtonDown';

export default function DocumentPage() {
  const DocumentPageMouse = useRef(null);
  const DocumentPageEfect = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    DocumentPageMouse.current.addEventListener('mousemove', parallax);
    setTimeout(() => {
      dispatch(changeLoader(true));
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function parallax(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = (width / 2 - mouseX) / 20;
    const y = (height / 2 - mouseY) / 20;
    DocumentPageEfect.current.style.transform = `translate3d(${x}px,${y}px,0px)`;
  }
  return (
    <div className="DocumentPage" ref={DocumentPageMouse}>
      <section className="DocumentPage__section-1">
        <Container>
          <h1 className="DocumentPage__title">
            <span className="DocumentPage__title-text1">навчально</span>
            <span className="DocumentPage__title-text2">методична</span>
            <span className="DocumentPage__title-text2">робота</span>
          </h1>
        </Container>
        <ButtonDown />
      </section>
      <section className="DocumentPage__section-2">
        <Container>
          <h2 className="DocumentPage__title2">
            <span className="DocumentPage__title-text1">жива</span>
            <span className="DocumentPage__title-text2">легенда</span>
            <span className="DocumentPage__title-text2">грузії</span>
          </h2>
          <div ref={DocumentPageEfect} className="DocumentPage__box-img">
            <img className="DocumentPage__img" src={img} alt="image2" />
          </div>
          <div className="DocumentPage__box-img2">
            <img
              className="DocumentPage__img2"
              src={img2}
              alt="image2"
              width="492"
            />
            <button className="DocumentPage__btn-play" type="button"></button>
          </div>
          <div className="DocumentPage__box-text">
            <h4>Жива легенда Грузії</h4>
            <p>
              За останні 130 років вже понад 200 мільйонів людей по всьому світу
              відчули живильну силу Borjomi.
              <br />
              <br />
              Слоган кампанії «Жива вода, жива легенда» розповідає про цилющу
              воду, що оживляє тіло, розум і душу.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
