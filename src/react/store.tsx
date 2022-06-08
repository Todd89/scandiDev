import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== 'production',
});

export type TStore = ReturnType<typeof store.getState>;
export default store;
