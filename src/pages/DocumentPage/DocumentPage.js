/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react';
import './DocumentPage.css';
import { changeLoader } from '../../redux/loader/loader-actions';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container/Container';
import ButtonDown from '../../components/ButtonDown/ButtonDown';

export default function DocumentPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeLoader(true));
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="DocumentPage">
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
          <ul className="DocumentPage__list">
            <li className="DocumentPage__item">
              <h3 className="DocumentPage__title-h3">
                Витяг робочої програми навчальної дисципліни «Фізичне виховання»
                221 Стоматологія (3роки)
              </h3>
              <a
                className="DocumentPage__link"
                href="https://drive.google.com/file/d/1xzDOpI0rBw2IV27_gm9mouuOShg-M6JH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            <li className="DocumentPage__item">
              <h3 className="DocumentPage__title-h3">
                Витяг робочої програми навчальної дисципліни «Фізичне виховання»
                221 Стоматологія (2 роки)
              </h3>
              <a
                className="DocumentPage__link"
                href="https://drive.google.com/file/d/14swWm8N1suq_ktHztUSq9lj4OuL2dVqt/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            {/* <li className="DocumentPage__item">
              <h3 className="DocumentPage__title-h3">
                Витяг робочої програми навчальної дисципліни «Фізичне виховання»
                та «Фізична культура» 221 Стоматологія
              </h3>
              <a
                className="DocumentPage__link"
                href="https://drive.google.com/file/d/1MvrC5rcK7InKWfAUODAGG9n6ecUJWIx1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li> */}
            <li className="DocumentPage__item">
              <h3 className="DocumentPage__title-h3">
                Витяг робочої програми навчальної дисципліни «Фізичне виховання»
                та «Фізична культура» 223 Медсестринство (4 роки)
              </h3>
              <a
                className="DocumentPage__link"
                href="https://drive.google.com/file/d/1R7at_zxzZa2FToUA682xDw1x5DsiNcRr/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            <li className="DocumentPage__item">
              <h3 className="DocumentPage__title-h3">
                Витяг робочої програми навчальної дисципліни «Фізичне виховання»
                та «Фізична культура» 223 Медсестринство (3 роки)
              </h3>
              <a
                className="DocumentPage__link"
                href="https://drive.google.com/file/d/1giNpT0ylBXMzzx8x1FFpr8lYiR6n5uSO/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            {/* <li className="DocumentPage__item">
              <h3 className="DocumentPage__title-h3">
                Правила техніки безпеки при заняттях фізичною культурою в умовах
                самоізоляції на дистанційному навчанні
              </h3>
              <a
                className="DocumentPage__link"
                href="https://drive.google.com/file/d/10rsucpNRMAAacIyeUe-n5kRPIStP1aJu/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            <li className="DocumentPage__item">
              <h3 className="DocumentPage__title-h3">
                Рекомендації щодо виконання фізичних вправ в умовах
                дистанційного навчання студентам ЗФПО «КММФК»
              </h3>
              <a
                className="DocumentPage__link"
                href="https://drive.google.com/file/d/1LsPMZVbVsf4Ae1EI9VgRdbh90DtYIbQN/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li> */}
          </ul>
        </Container>
      </section>
    </div>
  );
}
