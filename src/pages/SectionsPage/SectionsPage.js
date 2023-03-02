import React, { useEffect } from 'react';
import './SectionsPage.css';
import chess from '../../images/section/chess.jpg';
import fitness from '../../images/section/fitness.jpg';
import badminton from '../../images/section/badminton.jpg';
import volleyball from '../../images/section/volleyball.jpg';
import basketball from '../../images/section/basketball.jpg';
import tennis from '../../images/section/tennis.jpg';
import chessIcon from '../../images/section/chessIcon.png';
import badmintonIcon from '../../images/section/badmintonIcon.png';
import volleyballIcon from '../../images/section/volleyballIcon.png';
import basketballIcon from '../../images/section/basketballIcon.png';
import tennisIcon from '../../images/section/tennisIcon.png';
import dumbbell from '../../images/section/dumbbell.png';
import { changeLoader } from '../../redux/loader/loader-actions';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container/Container';
import ButtonDown from '../../components/ButtonDown/ButtonDown';
import Victor from '../../images/teachers/SoBik.png';
import Luba from '../../images/teachers/KuLub.png';
import Serhii from '../../images/teachers/OnSer.png';
import Tamara from '../../images/teachers/NaTam.png';
import SerhiiG from '../../images/teachers/EmSer.png';
import Lida from '../../images/teachers/NoLid.png';

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
            <span className="SectionsPage__title-text1">Спортивні</span>
            <span className="SectionsPage__title-text2">ігри</span>
            <span className="SectionsPage__title-text2">бадмінтон</span>
          </h2>
          <div className="SectionsPage__content">
            <div className="SectionsPage__box1">
              <div className="SectionsPage__badminton">
                <button
                  className="SectionsPage__button-badminton"
                  type="button"
                >
                  Тренери
                </button>
                <div className="SectionsPage__teachers">
                  <img
                    className="SectionsPage__teacher-img"
                    src={Victor}
                    alt="Victor"
                  />
                  <img
                    className="SectionsPage__teacher-img"
                    src={Serhii}
                    alt="Serhii"
                  />

                  <img
                    className="SectionsPage__teacher-img"
                    src={Luba}
                    alt="Luba"
                  />
                </div>
              </div>
              <img
                className="SectionsPage__img1"
                src={badmintonIcon}
                alt="badmintonIcon"
              />
              <div className="SectionsPage__box-text1">
                <h4>Чому саме бадмінтон?</h4>
                <p>
                  Бадмінтон крім навантаження на всі групи м’язів також є
                  веселою грою. Під час занять бадмінтоном і високої
                  інтенсивності ударів все тіло відчуває навантаження. Бадмінтон
                  не тільки зміцнює тіло, але і розвиває координацію.
                </p>
              </div>
            </div>
            <div className="SectionsPage__box2">
              <div className="SectionsPage__box-text2">
                <h4>7 причин займатися бадмінтоном:</h4>
                <ul className="List">
                  <li>
                    під час гри дозволяє спалювати до 500 калорій, при цьому
                    дарує чудовий настрій;
                  </li>
                  <li>добре впливає на зір;</li>
                  <li>
                    це швидка і активна гра, вона дозволяє розвивати
                    опорно-руховий апарат;
                  </li>
                  <li>
                    стимулює поліпшення пам’яті, реакції і кмітливості через
                    постійний приплив кисню до мозку;
                  </li>
                  <li>
                    покращує імунітет і опірність організму шкідливим вірусам і
                    бактеріям, якщо регулярно займатися;
                  </li>
                  <li>
                    поліпшить контроль цукру в крові, прискорить метаболізм
                    завдяки навантаженням;
                  </li>
                  <li>
                    допомагає загартувати організм. Він підвищує загальний тонус
                    серцевого м’яза, витривалість всього організму;
                  </li>
                </ul>
              </div>
              <img
                className="SectionsPage__img2"
                src={badminton}
                alt="badminton"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="SectionsPage__section-2">
        <Container>
          <h2 className="SectionsPage__title2">
            <span className="SectionsPage__title-text1">Спортивні</span>
            <span className="SectionsPage__title-text2">ігри</span>
            <span className="SectionsPage__title-text2">волейбол</span>
          </h2>
          <div className="SectionsPage__content">
            <div className="SectionsPage__box1">
              <div className="SectionsPage__badminton">
                <button
                  className="SectionsPage__button-badminton"
                  type="button"
                >
                  Тренери
                </button>
                <div className="SectionsPage__teachers">
                  <img
                    className="SectionsPage__teacher-img"
                    src={Victor}
                    alt="Victor"
                  />
                  <img
                    className="SectionsPage__teacher-img"
                    src={Luba}
                    alt="Luba"
                  />
                </div>
              </div>
              <img
                className="SectionsPage__img1"
                src={volleyballIcon}
                alt="volleyballIcon"
              />
              <div className="SectionsPage__box-text1">
                <h4>Волейбо́л</h4>
                <p>
                  — спортивна гра з м'ячем, у якій дві команди змагаються на
                  спеціальному майданчику, розділеному сіткою. Волейбол є
                  олімпійським видом спорту. Волейбол заслужено входить у список
                  найпопулярніших спортивних ігор в усьому світі.
                </p>
              </div>
            </div>
            <div className="SectionsPage__box2">
              <div className="SectionsPage__box-text2">
                <h4>Що ж робить цю гру такою привабливою:</h4>
                <ul className="List">
                  <li>Користь для особистого вдосконалення;</li>
                  <li>Важливість командного духу для перемог;</li>
                  <li>Безпека даного виду спорту;</li>
                  <li>Позитивний вплив на здоров'я;</li>
                  <li>Доступність гри, недорогий спортивний інвентар.</li>
                </ul>
              </div>
              <img
                className="SectionsPage__img2"
                src={volleyball}
                alt="volleyball"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="SectionsPage__section-2">
        <Container>
          <h2 className="SectionsPage__title2">
            <span className="SectionsPage__title-text1">Спортивні</span>
            <span className="SectionsPage__title-text2">ігри</span>
            <span className="SectionsPage__title-text2">баскетбол</span>
          </h2>
          <div className="SectionsPage__content">
            <div className="SectionsPage__box1">
              <div className="SectionsPage__badminton">
                <button
                  className="SectionsPage__button-badminton"
                  type="button"
                >
                  Тренери
                </button>
                <div className="SectionsPage__teachers">
                  <img
                    className="SectionsPage__teacher-img"
                    src={Victor}
                    alt="Victor"
                  />
                  <img
                    className="SectionsPage__teacher-img"
                    src={SerhiiG}
                    alt="Serhii"
                  />
                </div>
              </div>
              <img
                className="SectionsPage__img1"
                src={basketballIcon}
                alt="basketballIcon"
              />
              <div className="SectionsPage__box-text1">
                <h4>Баскетбол</h4>
                <p>
                  - спортивна командна гра з м'ячем, який закидають руками в
                  кільце із сіткою (кошик), закріпленою на щиті на висоті 3
                  метри 5 сантиметрів (10 футів) над майданчиком. Баскетбол є
                  олімпійським видом спорту.
                </p>
              </div>
            </div>
            <div className="SectionsPage__box2">
              <div className="SectionsPage__box-text2">
                <p>
                  Баскетбол має значний оздоровчий вплив на організм людини, а
                  саме сприяє гармонійному зміцненню мускулатури, зміцнює
                  вестибулярний апарат, покращує координацію рухів, розвиває
                  спритність, підвищує витривалість організму, зміцнює захисні
                  властивості організму, тренує дихальний апарат людини,
                  збільшує об'єм легенів
                </p>
              </div>
              <img
                className="SectionsPage__img2"
                src={basketball}
                alt="basketball"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="SectionsPage__section-2">
        <Container>
          <h2 className="SectionsPage__title2">
            <span className="SectionsPage__title-text1">Спортивні</span>
            <span className="SectionsPage__title-text2">ігри</span>
            <span className="SectionsPage__title-text2">пінг-понг</span>
          </h2>
          <div className="SectionsPage__content">
            <div className="SectionsPage__box1">
              <div className="SectionsPage__badminton">
                <button
                  className="SectionsPage__button-badminton"
                  type="button"
                >
                  Тренери
                </button>
                <div className="SectionsPage__teachers">
                  <img
                    className="SectionsPage__teacher-img"
                    src={Victor}
                    alt="Victor"
                  />
                  <img
                    className="SectionsPage__teacher-img"
                    src={Lida}
                    alt="Lida"
                  />
                </div>
              </div>
              <img
                className="SectionsPage__img1"
                src={tennisIcon}
                alt="tennisIcon"
              />
              <div className="SectionsPage__box-text1">
                <h4>Настільний теніс</h4>
                <p>
                  – вид спорту, в якому використовують спеціальні ракетки, мߴячі
                  та стіл, розмежований сіткою нав­піл. Змагаються між собою
                  двоє або дві пари суперників.
                </p>
              </div>
            </div>
            <div className="SectionsPage__box2">
              <div className="SectionsPage__box-text2">
                <p>
                  Регулярні заняття настільним тенісом сприяють зміцненню м'язів
                  ніг, рук, спини і преса. Крім того, при заняттях настільним
                  тенісом задіяні різні суглоби руки, ніг і тулуба. У
                  результаті, суглоби стають більш гнучкими, що дозволяє
                  зберігати фізичну активність
                </p>
              </div>
              <img className="SectionsPage__img2" src={tennis} alt="tennis" />
            </div>
          </div>
        </Container>
      </section>
      <section className="SectionsPage__section-2">
        <Container>
          <h2 className="SectionsPage__title2">
            <span className="SectionsPage__title-text1">тренажерна</span>
            <span className="SectionsPage__title-text2">зала</span>
            <span className="SectionsPage__title-text2">фітнес</span>
          </h2>
          <div className="SectionsPage__content">
            <div className="SectionsPage__box1">
              <div className="SectionsPage__badminton">
                <button
                  className="SectionsPage__button-badminton"
                  type="button"
                >
                  Тренери
                </button>
                <div className="SectionsPage__teachers">
                  <img
                    className="SectionsPage__teacher-img"
                    src={Victor}
                    alt="Victor"
                  />
                  <img
                    className="SectionsPage__teacher-img"
                    src={Serhii}
                    alt="Serhii"
                  />
                </div>
              </div>
              <img
                className="SectionsPage__img1"
                src={dumbbell}
                alt="dumbbell"
              />
              <div className="SectionsPage__box-text1">
                <p>
                  Заняття в тренажерній залі можуть допомогти підтримати
                  здоровий стиль життя, підвищити мускульну силу та
                  витривалість, покращити постановку тіла та загальний здоров'я.
                </p>
              </div>
            </div>
            <div className="SectionsPage__box2">
              <div className="SectionsPage__box-text2">
                <h4>А чи знали ви?</h4>
                <ul className="List">
                  <li>
                    правильне виконання вправ з тренажерами стимулює поліпшення
                    процесу кровообігу, зміцнення кісткової тканини, а також
                    знижує ймовірність розвитку серцево-судинних захворювань;
                  </li>
                  <li>
                    прискорення метаболізму та зменшення кількості жирових
                    відкладень;
                  </li>
                  <li>наростання м'язової маси;</li>
                  <li>
                    розвиток витривалості та поліпшення силових показників;
                  </li>
                  <li>
                    під час занять ви звільняєте свій мозок, забуваєте про
                    власні проблеми, розслабляєтеся, що піднімає настрій;
                  </li>
                  <li>можливість роботи над усіма групами м'язів;</li>
                </ul>
                <p></p>
              </div>
              <img className="SectionsPage__img2" src={fitness} alt="fitness" />
            </div>
          </div>
        </Container>
      </section>
      <section className="SectionsPage__section-2">
        <Container>
          <h2 className="SectionsPage__title2">
            <span className="SectionsPage__title-text1">шашки</span>
            <span className="SectionsPage__title-text2">та</span>
            <span className="SectionsPage__title-text2">шахи</span>
          </h2>
          <div className="SectionsPage__content">
            <div className="SectionsPage__box1">
              <div className="SectionsPage__badminton">
                <button
                  className="SectionsPage__button-badminton"
                  type="button"
                >
                  Тренери
                </button>
                <div className="SectionsPage__teachers">
                  <img
                    className="SectionsPage__teacher-img"
                    src={Tamara}
                    alt="Tamara"
                  />
                  <img
                    className="SectionsPage__teacher-img"
                    src={SerhiiG}
                    alt="Serhii"
                  />
                </div>
              </div>
              <img
                className="SectionsPage__img1"
                src={chessIcon}
                alt="chessIcon"
              />
              <div className="SectionsPage__box-text1">
                <h4>Гра в шашки</h4>
                <p>
                  Це чудовий спосіб провести вільний час з користю, бо ця гра
                  покращує діяльність мозку, покращує пам'ять, розвиває логічне
                  мислення та концентрацію уваги.
                </p>
              </div>
            </div>
            <div className="SectionsPage__box2">
              <div className="SectionsPage__box-text2">
                <h4>Чи корисно грати в шахи?</h4>
                <p>
                  Шахи дуже добре допомагають в загальному розвитку дорослих та
                  дітей: покращують пам'ять, мислення, логіку, виховують
                  посидючість, концентрацію уваги. Краще розвивається просторова
                  уява, уміння візуалізувати, планувати, прогнозувати, а також
                  стратегічно мислити.
                </p>
              </div>
              <img className="SectionsPage__img2" src={chess} alt="chess" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
