import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../../api';

import { RegisterResponse } from '../types/RegisterResponse';
import { RegisterRequest } from '../types/RegisterRequest';
import { LoginResponse } from '../types/LoginResponse';
import { LoginRequest } from '../types/LoginRequest';

interface IState {
  loading: boolean;
  error: string;
  isAuth: boolean;
  username: string;
  role: string;
}

const initialState: IState = {
  loading: false,
  error: '',
  isAuth:
    //@ts-ignore
    localStorage.getItem('token') && localStorage.getItem('token').length > 0
      ? true
      : false,
  username: '',
  role: '',
};

export const handleRegister = createAsyncThunk<
  RegisterResponse,
  RegisterRequest
>('user/register', async (user, { rejectWithValue }) => {
  try {
    const response = await $api.post('auth/registration', user);
    console.log(response);

    if (response.status !== 200) {
      throw new Error('Error');
    }
    console.log(response.data);

    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const handleLogin = createAsyncThunk<LoginResponse, LoginRequest>(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await $api.post('auth/login', user);
      console.log(response);

      if (response.status !== 200) {
        throw new Error('Error');
      }

      console.log(response);

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      localStorage.removeItem('token');
      state.role = '';
    },
  },
  extraReducers(builder) {
    builder.addCase(handleRegister.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(handleRegister.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token);
      }
      state.isAuth = true;
      state.role = 'user';
    });
    builder.addCase(handleRegister.rejected, (state, action) => {
      //@ts-ignore
      state.error = action.payload;
    });

    builder.addCase(handleLogin.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token);
      }
      state.isAuth = true;
      state.role = action.payload.role;
    });
    builder.addCase(handleLogin.rejected, (state, action) => {
      //@ts-ignore
      state.error = action.payload.response;
    });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
