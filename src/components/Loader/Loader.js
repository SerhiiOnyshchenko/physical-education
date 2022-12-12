import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import './Loader.css';
import { getLoader } from './../../redux/loader/loader-selectors';

export default function Loader() {
  const inTop = useSelector(getLoader);
  const loaderRoot = useRef(document.querySelector('#loader'));
  return createPortal(
    <>
      <div className={`Loader Loader1 ${inTop ? 'Loader-in-top' : ''}`}></div>
      <div className={`Loader Loader2 ${inTop ? 'Loader-in-top' : ''}`}></div>
    </>,
    loaderRoot.current
  );
}
