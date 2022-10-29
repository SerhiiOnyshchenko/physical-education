import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeLoader } from './loader-actions';

const loaderInTop = false;

const loader = createReducer(loaderInTop, {
  [changeLoader]: (state, { payload }) => (state = payload),
});

export default combineReducers({
  loader,
});
