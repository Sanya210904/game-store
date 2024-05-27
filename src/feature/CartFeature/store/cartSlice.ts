import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../../api';
import { Game } from '../../../types/Game';
// import {ISetTestResults} from '../../TestModule/models/ISetTestResultsResponse';

interface IState {
  loading: boolean;
  error: string;
  cart: Game[];
  totalPrice: number;
}

const initialState: IState = {
  loading: false,
  error: '',
  cart: [],
  totalPrice: 0,
};

export const handleGetCart = createAsyncThunk('cart/get', async () => {});

export const handleAddToCart = createAsyncThunk('cart/add', async () => {});

export const handleRemoveFromCart = createAsyncThunk(
  'cart/remove',
  async () => {}
);

export const handleClearFromCart = createAsyncThunk(
  'cart/clear',
  async () => {}
);

export const createOrder = createAsyncThunk('cart/order', async () => {
  try {
  } catch (e) {}
});

// export const getTestList = createAsyncThunk<
//   { data: ITestListResponse; category: TestCategory },
//   TestCategory,
//   { rejectValue: IError }
// >('testList/getNew', async (category, { rejectWithValue }) => {
//   try {
//     let requestLink: string;

//     if (category === 'exam') {
//       requestLink = `tests?pageSize=150`;
//     } else if (category === 'topic') {
//       requestLink = `topics?pageSize=70`;
//     } else {
//       throw Error('Category is not correct');
//     }

//     const response = await $api.get(requestLink);

//     if (response.status !== 200) {
//       console.error('API Error: Response status is not 200');
//       throw new Error('Something went wrong');
//     }

//     console.log(response.data);

//     return { data: response.data, category };
//   } catch (e: any) {
//     console.error('Api Error: ', e);
//     crashlytics().recordError(e);
//     throw rejectWithValue(e);
//   }
// });

export const testListSlice = createSlice({
  name: 'testList',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Game>) {
      state.cart.push(action.payload);

      const currentGamePrice = action.payload.price;
      state.totalPrice += currentGamePrice;
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const changedCart = state.cart.filter(
        (game) => game.game_id !== action.payload
      );
      const changedPrice = changedCart.reduce((totalPrice, game) => {
        return totalPrice + game.price;
      }, 0);

      console.log(changedPrice);
      state.totalPrice = changedPrice;
      state.cart = changedCart;
    },
  },
  extraReducers(builder) {},
});

export default testListSlice.reducer;
export const { addToCart, removeFromCart } = testListSlice.actions;
