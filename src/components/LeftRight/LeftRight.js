import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { changeLoader } from '../../redux/loader/loader-actions';
import { linksList } from '../db/linksArr';
import './LeftRight.css';

export default function LeftRight() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!linksList.includes(location.pathname)) {
      setShow(false);
      return;
    }
    setShow(true);
  }, [location]);

  const handleLeft = () => {
    dispatch(changeLoader(false));
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
      navigate(linksList[linksList.indexOf(location.pathname) - 1]);
      // setIndexList(prev => prev - 1);
    }, 1000);
  };

  const handleRight = () => {
    dispatch(changeLoader(false));
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
      navigate(linksList[linksList.indexOf(location.pathname) + 1]);
      // setIndexList(prev => prev + 1);
    }, 1000);
  };

  return (
    <>
      {show && (
        <div className="btnLeftRight">
          <div
            className="btnLeftRight__left"
            style={
              location.pathname === '/'
                ? { display: 'none' }
                : { display: 'flex' }
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
      )}
    </>
  );
}
