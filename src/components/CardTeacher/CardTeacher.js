import React, { useState } from 'react';
import s from './style.module.css';

export default function CardTeacher({ teacher }) {
  const [isReadMore, setIsReadMore] = useState(true);
  return (
    <div className={s.card}>
      <div className={s.content}>
        <h2>{teacher.name}</h2>
        <p className={!isReadMore ? s.hidden : ''}>
          {teacher.info.map(item => (
            <p key={item}>{item}</p>
          ))}
        </p>
        <p className={isReadMore ? s.hidden : ''}>
          I'm improving my skills in this direction and expanding them with new
          technology. I would like to find a project work/full-time job in a
          creative company with up-to-date tasks and collaborative team!
        </p>
        <button
          type="button"
          className={s.readMore}
          onClick={() => {
            setIsReadMore(!isReadMore);
          }}
        >
          {isReadMore ? 'Read More' : 'Read Less'}
        </button>
      </div>
      <img src={teacher.img} alt={teacher.name} />
    </div>
  );
}
