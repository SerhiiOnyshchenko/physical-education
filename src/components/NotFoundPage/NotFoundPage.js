import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeLoader } from '../../redux/loader/loader-actions';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeLoader(true));
    }, 1000);
  }, []);
  return <div className="NotFoundPage"></div>;
}
