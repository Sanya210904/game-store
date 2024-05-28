import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../../api';
import { Game } from '../../../types/Game';
import { AddToCartResponse } from '../types/AddToCartResponse';
import { AddToCartRequest } from '../types/AddToCartRequest';
// import {ISetTestResults} from '../../TestModule/models/ISetTestResultsResponse';

interface IState {
  loading: boolean;
  error: string;
  cart: AddToCartResponse[];
  totalPrice: number;
  cartItemsAmount: number;
}

const initialState: IState = {
  loading: false,
  error: '',
  cart: [],
  totalPrice: 0,
  cartItemsAmount: 0,
};

export const handleGetCart = createAsyncThunk<
  { items: AddToCartResponse[] },
  null
>('cart/get', async () => {
  try {
    const response = await $api.get('cart');

    if (response.status !== 200) {
      throw new Error();
    }

    console.log(response);

    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const handleAddToCart = createAsyncThunk<
  AddToCartResponse,
  AddToCartRequest
>('cart/add', async (gameId, { dispatch }) => {
  try {
    const response = await $api.post(
      `cart/add?game_id=${gameId}&quantity=${1}`
    );

    console.log(response);

    if (response.status !== 200) {
      throw new Error();
    }

    dispatch(addToCart(response.data.game));
    console.log(response);

    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const handleRemoveFromCart = createAsyncThunk<string, number>(
  'cart/remove',
  async (id, { dispatch }) => {
    try {
      const response = await $api.delete(`cart/remove?game_id=${id}`);

      if (response.status !== 204) {
        throw new Error();
      }

      dispatch(removeFromCart(id));

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const handleClearFromCart = createAsyncThunk(
  'cart/clear',
  async () => {}
);

export const handleCreateOrder = createAsyncThunk('cart/order', async () => {
  try {
    const response = await $api.post(`cart/checkout`);

    if (response.status !== 200) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const testListSlice = createSlice({
  name: 'testList',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Game>) {
      // const currentGamePrice = action.payload.price;
      // state.totalPrice += currentGamePrice;
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const changedCart = state.cart.filter(
        (game) => game.game.game_id !== action.payload
      );
      state.cart = changedCart;

      // const changedPrice = changedCart.reduce((totalPrice, game) => {
      //   return totalPrice + game.game.price;
      // }, 0);
      // state.totalPrice = changedPrice;
    },
  },
  extraReducers(builder) {
    builder.addCase(handleGetCart.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(handleGetCart.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.cart = action.payload.items;
      }
      state.cartItemsAmount = action.payload.items.length;
    });
    builder.addCase(handleGetCart.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(handleAddToCart.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(handleAddToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItemsAmount += 1;
    });
    builder.addCase(handleAddToCart.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(handleRemoveFromCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleRemoveFromCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItemsAmount -= 1;
    });
    builder.addCase(handleRemoveFromCart.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(handleCreateOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleCreateOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = [];
    });
    builder.addCase(handleCreateOrder.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default testListSlice.reducer;
export const { removeFromCart, addToCart } = testListSlice.actions;
