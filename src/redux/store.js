import { configureStore } from '@reduxjs/toolkit';
import loaderReduser from './loader/loader-reduser';

const store = configureStore({
  reducer: {
    loader: loaderReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
