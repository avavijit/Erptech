import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loadState } from "../utility/browser-storage";

import AuthRedux from './AuthRedux';
import MainRedux from './MainRedux';

const reducers = combineReducers({
  auth: AuthRedux,
  main: MainRedux,
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState('redux'),
});