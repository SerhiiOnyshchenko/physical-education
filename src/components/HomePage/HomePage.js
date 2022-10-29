import React, { useEffect, useRef } from 'react';
import Container from '../Container/Container';
import './HomePage.css';
import img from '../../images/coledge/1.jpg';
import img4 from '../../images/coledge/14.jpg';
import ButtonDown from '../ButtonDown/ButtonDown';
import { useDispatch } from 'react-redux';
import { changeLoader } from './../../redux/loader/loader-actions';
import LeftRight from '../LeftRight/LeftRight';

export default function HomePage() {
  const homeMouse = useRef(null);
  const home2efect = useRef(null);
  const home4efect = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    homeMouse.current.addEventListener('mousemove', parallax);
    setTimeout(() => {
      dispatch(changeLoader(true));
    }, 1000);
  }, []);

  function parallax(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = (width / 2 - mouseX) / 20;
    const y = (height / 2 - mouseY) / 20;
    home2efect.current.style.transform = `translate3d(${x}px,${y}px,0px)`;
    home4efect.current.style.transform = `translate3d(${x}px,${y}px,0px)`;
  }
  return (
    <div ref={homeMouse}>
      <div className="home">
        <Container>
          <div className="home__comtainer">
            <h1 className="home__title">
              <span className="home__text-1">фізкультурно</span>
              <span className="home__text-2">спортивний</span>
              <span className="home__text-3">цикл</span>
            </h1>
          </div>
          <ButtonDown />
        </Container>
      </div>
      <div className="home-2">
        <Container>
          <h2 className="home__title-2">
            <span className="home__text-1">THE DEEPEST</span>
            <span className="home__text-2">SITE</span>
          </h2>
          <div ref={home2efect} className="box-img">
            <img className="img" src={img} alt="image2" height="420" />
          </div>
          <div className="box-text">
            <h4>Найглибший сайт Borjomi</h4>
            <p>
              Thedeepestsite буквально занурює тебе на глибину зародження
              мінеральної води Borjomi. Він розповість секрети ювенільних вод,
              що зароджуються на глибині 8 тисяч метрів і збагачуються більш ніж
              60 мінералами, коли виходять на поверхню землі. І це — тільки
              початок цікавих фактів на сайті.
            </p>
          </div>
        </Container>
      </div>
      <div className="home-3">
        <Container>
          <div className="home__comtainer">
            <h2 className="home__title-3">
              <span className="home__text-31">ювенільна</span>
              <span className="home__text-32">вода</span>
            </h2>
            <button className="home__btn-play" type="button"></button>
          </div>
        </Container>
      </div>
      <div className="home-4">
        <Container>
          <div className="home__comtainer">
            <h2 className="home__title-4">
              <span className="home__text-41">ювенільна</span>
              <span className="home__text-42">вода</span>
            </h2>
          </div>
          <div ref={home4efect} className="box-img4">
            <img src={img4} alt="image1" width="700" height="420" />
          </div>
          <div className="box-text-4">
            <h4>З глибоких грузинських джерел</h4>
            <p>
              Borjomi піднімається з глибини 8000 метрів. Ювенільні води – це
              води, що ніколи раніше не виходили на поверхню, а тепер, під час
              свого підйому, вбирають в себе унікальну енергію мінералів.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
