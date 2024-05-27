import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../../api';
import { Game } from '../../../types/Game';
import { RegisterResponse } from '../types/RegisterResponse';
import { RegisterRequest } from '../types/RegisterRequest';
import { LoginResponse } from '../types/LoginResponse';
import { LoginRequest } from '../types/LoginRequest';
// import {ISetTestResults} from '../../TestModule/models/ISetTestResultsResponse';

interface IState {
  loading: boolean;
  error: string;
  isAuth: boolean;
  username: string;
}

const initialState: IState = {
  loading: false,
  error: '',
  isAuth: false,
  username: '',
};

export const handleRegister = createAsyncThunk<
  RegisterResponse,
  RegisterRequest
>('user/register', async (user) => {
  try {
    const response = await $api.post('auth/registration', user);

    if (response.status !== 201) {
      throw new Error('Error');
    }

    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const handleLogin = createAsyncThunk<LoginResponse, LoginRequest>(
  'user/register',
  async (user) => {
    try {
      const response = await $api.post('auth/login', user);

      if (response.status !== 201) {
        throw new Error('Error');
      }

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const testListSlice = createSlice({
  name: 'testList',
  initialState,
  reducers: {
    registerUser(state, action:PayloadAction<LoginRequest>) {
        state.username = action.payload.username;
    }
  },
  extraReducers(builder) {
    builder.addCase(handleRegister.pending, (state, action) => {
        state.loading = true;
        state.error = '';
    });
    builder.addCase(handleRegister.fulfilled, (state, action) => {
        state.loading = false;
    });
    
    builder.addCase(handleLogin.pending, (state, action) => {
        state.loading = true;
        state.error = '';
    })
    builder.addCase(handleLogin.fulfilled, (state, action) => {
        state.loading = false;
    });
  },
});

export default testListSlice.reducer;
export const {} = testListSlice.actions;
