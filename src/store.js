import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user';

const reducers = {
  user: userReducer
};

const store = configureStore({ reducer: reducers });

export default store;
