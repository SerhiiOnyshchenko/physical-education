import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { changeLoader } from '../../redux/loader/loader-actions';
import './LeftRight.css';

export default function LeftRight() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const list = ['/', '/history', '/sections', '/u', '/teachers', '/contacts'];
  const [indexList, setIndexList] = useState(list.indexOf(location.pathname));

  useEffect(() => {
    navigate(list[indexList]);
  }, [indexList]);

  const handleLeft = () => {
    dispatch(changeLoader(false));
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
      setIndexList(prev => prev - 1);
    }, 1000);
  };

  const handleRight = () => {
    dispatch(changeLoader(false));
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
      setIndexList(prev => prev + 1);
    }, 1000);
  };

  return (
    <div className="btnLeftRight">
      <div
        className="btnLeftRight__left"
        style={
          location.pathname === '/' ? { display: 'none' } : { display: 'flex' }
        }
      >
        <p className="btnLeftRight__text">назад</p>
        <button
          className="btnLeftRight__btn "
          type="button"
          onClick={handleLeft}
        ></button>
      </div>
      <div></div>
      <div
        className="btnLeftRight__right"
        style={
          location.pathname === '/contacts'
            ? { display: 'none' }
            : { display: 'flex' }
        }
      >
        <p className="btnLeftRight__text">далі</p>
        <button
          className="btnLeftRight__btn"
          type="button"
          onClick={handleRight}
        ></button>
      </div>
    </div>
  );
}
