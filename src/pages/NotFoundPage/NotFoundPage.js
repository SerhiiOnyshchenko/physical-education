import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import { changeLoader } from '../../redux/loader/loader-actions';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeLoader(true));
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="NotFoundPage"></div>
      <Footer />
    </>
  );
}
