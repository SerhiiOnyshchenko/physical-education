import React, { useState } from 'react';
import './TeachersPage.css';
import Container from './../Container/Container';
import ButtonDown from '../ButtonDown/ButtonDown';
import CardTeacher from '../CardTeacher/CardTeacher';
import { teachers } from '../db/teachers';

export default function TeachersPage() {
  const [countTeacher, setCountTeacher] = useState(0);

  const heandelLeft = () => {
    if (countTeacher === 0) {
      setCountTeacher(teachers.length - 1);
    } else {
      setCountTeacher(countTeacher - 1);
    }
  };
  const heandelRight = () => {
    if (countTeacher === teachers.length - 1) {
      setCountTeacher(0);
    } else {
      setCountTeacher(countTeacher + 1);
    }
  };
  return (
    <div className="TeachersPage">
      <section className="TeachersPage__section-1">
        <Container>
          <h1 className="TeachersPage__title">
            <span className="TeachersPage__title-text1">викладачі</span>
            <span className="TeachersPage__title-text2">циклу</span>
          </h1>
        </Container>
        <ButtonDown />
      </section>
      <section className="TeachersPage__section-2">
        <Container>
          <h3 className="TeachersPage__title TeachersPage__title2">
            викладач циклу
          </h3>
        </Container>
        <div className="TeachersPage__box-card">
          <button
            className="TeachersPage__btn-left"
            type="button"
            onClick={heandelLeft}
          ></button>
          <CardTeacher teacher={teachers[countTeacher]} />
          <button
            className="TeachersPage__btn-right"
            type="button"
            onClick={heandelRight}
          ></button>
        </div>
      </section>
    </div>
  );
}
