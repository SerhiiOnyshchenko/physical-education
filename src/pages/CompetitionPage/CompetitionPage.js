import React, { useEffect, useRef } from 'react';
import './CompetitionPage.css';
import img from '../../images/coledge/1.jpg';
import img4 from '../../images/coledge/14.jpg';
import { useDispatch } from 'react-redux';
import { changeLoader } from '../../redux/loader/loader-actions';
import Container from '../../components/Container/Container';
import ButtonDown from '../../components/ButtonDown/ButtonDown';
import Footer from '../../components/Footer/Footer';

export default function CompetitionPage() {
  const competitionMouse = useRef(null);
  const competition2efect = useRef(null);
  const competition4efect = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    competitionMouse.current.addEventListener('mousemove', parallax);
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
    competition2efect.current.style.transform = `translate3d(${x}px,${y}px,0px)`;
    competition4efect.current.style.transform = `translate3d(${x}px,${y}px,0px)`;
  }
  return (
    <div ref={competitionMouse}>
      <div className="competition">
        <Container>
          <div className="competition__container">
            <h1 className="competition__title">
              <span className="competition__text-1">спортивно</span>
              <span className="competition__text-2">масова</span>
              <span className="competition__text-3">робата</span>
            </h1>
          </div>
          <ButtonDown />
        </Container>
      </div>
      <div className="competition-2">
        <Container>
          <h2 className="competition__title-2">
            <span className="competition__text-1">THE DEEPEST</span>
            <span className="competition__text-2">SITE</span>
          </h2>
          <div ref={competition2efect} className="box-img">
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
      {/* <div className="competition-3">
        <Container>
          <div className="competition__comtainer">
            <h2 className="competition__title-3">
              <span className="competition__text-31">ювенільна</span>
              <span className="competition__text-32">вода</span>
            </h2>
            <button className="competition__btn-play" type="button"></button>
          </div>
        </Container>
      </div> */}
      <div className="competition-4">
        <Container>
          <div className="competition__container">
            <h2 className="competition__title-4">
              <span className="competition__text-41">ювенільна</span>
              <span className="competition__text-42">вода</span>
            </h2>
          </div>
          <div ref={competition4efect} className="box-img4">
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
      <Footer />
    </div>
  );
}
