import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import img from '../../images/coledge/1.jpg';
import img4 from '../../images/coledge/14.jpg';
import img3 from '../../images/Pages/home/home-video.webp';
import video from '../../images/Pages/home/Coledge.mp4';
import { useDispatch } from 'react-redux';
import { changeLoader } from './../../redux/loader/loader-actions';
import Container from '../../components/Container/Container';
import ButtonDown from '../../components/ButtonDown/ButtonDown';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
  const homeMouse = useRef(null);
  const home2efect = useRef(null);
  const home4efect = useRef(null);
  const dispatch = useDispatch();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    homeMouse.current.addEventListener('mousemove', parallax);
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
    home2efect.current.style.transform = `translate3d(${x}px,${y}px,0px)`;
    home4efect.current.style.transform = `translate3d(${x}px,${y}px,0px)`;
  }

  return (
    <div ref={homeMouse}>
      <div className="home">
        <Container>
          <div className="home__container">
            <h1 className="home__title">
              <span className="home__text-1">фізкультурно</span>
              <span className="home__text-2">спортивний цикл</span>
            </h1>
          </div>
          <ButtonDown />
        </Container>
      </div>
      <div className="home-2">
        <Container>
          <h2 className="home__title-2">
            <span className="home__text-1">Спец</span>
            <span className="home__text-2">зал</span>
          </h2>
          <div ref={home2efect} className="home__box-img">
            <img src={img} alt="image2" />
          </div>
          <div className="home__box-text">
            <h4>Зал для занять із спеціальними групами</h4>
            <p>
              - це приміщення, призначене для проведення тренувань та занять з
              різними спеціальними групами людей, такими як люди з обмеженими
              можливостями, люди з травмами або з особливими потребами. Зал
              також може мати додаткові зони для відпочинку та релаксу, де
              учасники можуть відпочивати і розслаблятися між тренуваннями. Ці
              зони можуть містити комфортні сидіння, розтяжки або зони для
              виконання вправ на гнучкість. Крім того, зал для занять із
              спеціальними групами може мати кваліфікованих інструкторів, які
              спеціалізуються на роботі з цими групами. Вони забезпечують
              індивідуальний підхід, надають підтримку та допомогу студентам,
              враховуючи їх потреби та обмеження. Зал для занять із спеціальними
              групами створює мотивуюче та підтримуюче середовище, де кожний
              студент може розвивати свої здібності, покращувати фізичну форму
              та насолоджуватися заняттями спортом.
            </p>
          </div>
        </Container>
      </div>
      <div className="home-3">
        <Container>
          <div className="home__container">
            <h2 className="home__title-3">
              <span
                className={
                  showVideo ? 'home__text-31 playVideo' : 'home__text-31'
                }
              >
                викладачі
              </span>
              <span
                className={
                  showVideo ? 'home__text-32 playVideo' : 'home__text-32'
                }
              >
                циклу
              </span>
            </h2>
            <div className="home__box-video">
              {showVideo ? (
                <>
                  <video className="home__video" controls>
                    <source src={video} type="video/mp4" />
                  </video>
                  <button
                    className="home__btn-play-close"
                    type="button"
                    onClick={() => setShowVideo(false)}
                  ></button>
                </>
              ) : (
                <>
                  <img src={img3} alt="teachers" />
                  <button
                    className="home__btn-play"
                    type="button"
                    onClick={() => setShowVideo(true)}
                  ></button>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
      <div className="home-4">
        <Container>
          {/* <div className="home__container"> */}
          <h2 className="home__title-4">
            <span className="home__text-41">фітнес</span>
            <span className="home__text-42">зала</span>
          </h2>
          <div ref={home4efect} className="box-img4">
            <img src={img4} alt="gym" width="600" height="420" />
          </div>
          <div className="home__box-text-4">
            {/* <h4>З глибоких грузинських джерел</h4> */}
            <p>
              <b>Тренажерний зал</b> - це спеціалізоване приміщення, обладнане
              різноманітними тренажерами та приладдям для фізичних вправ і
              тренувань. Це місце, де люди займаються фітнесом, покращують
              фізичну форму, зміцнюють м'язи та поліпшують загальну фізичну
              витривалість. В тренажерному залі можна знайти різні види
              тренажерів, які призначені для різних груп м'язів та фітнес-цілей.
              Серед них можуть бути велотренажери, бігові доріжки, еліптичні
              тренажери, різні типи гантелей, гребні тренажери, турніки, бруси
              та інші. Також, в тренажерному залі можуть бути присутні
              професійні тренери або інструктори, які надають індивідуальні
              консультації, розробляють тренувальні програми та допомагають
              виконувати вправи правильно та безпечно. Тренажерний зал є місцем,
              де можна працювати над своїм тілом, досягати фізичних цілей та
              підтримувати загальний стан здоров'я. Він створює сприятливу
              атмосферу для занять спортом та мотивує людей до регулярних
              фізичних тренувань.
            </p>
          </div>
          {/* </div> */}
        </Container>
      </div>
      <Footer />
    </div>
  );
}
