import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../feature/CartFeature/store/cartSlice';
import userSlice from '../feature/AuthFeature/store/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
