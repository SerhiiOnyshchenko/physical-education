import React from 'react';
import './ButtonDown.css';

export default function ButtonDown() {
  const dowm = () => {
    let scrollDistance = document.documentElement.clientHeight;
    window.scrollBy({ top: scrollDistance, behavior: 'smooth' });
  };
  return (
    <div className="btnDown">
      <p className="btnDown__text">Детальніше</p>
      <button className="btnDown__btn" type="button" onClick={dowm}></button>
    </div>
  );
}
