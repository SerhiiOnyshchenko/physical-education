import React, { useState } from 'react';
import s from './style.module.css';

export default function CardTeacher({ teacher }) {
  const [isReadMore, setIsReadMore] = useState(true);
  return (
    <div className={s.card}>
      <div className={s.content}>
        <h2>{teacher.name}</h2>
        <div className={!isReadMore ? s.hidden : ''}>
          {teacher.info.map(item => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <p className={isReadMore ? s.hidden : ''}>
          {teacher.moreInfo || 'Опис досягнень'}
        </p>
        <button
          type="button"
          className={s.readMore}
          onClick={() => {
            setIsReadMore(!isReadMore);
          }}
        >
          {isReadMore ? 'Більше' : 'Менше'}
        </button>
      </div>
      <img src={teacher.img} alt={teacher.name} />
    </div>
  );
}
