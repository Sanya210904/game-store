import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../feature/CartFeature/store/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
