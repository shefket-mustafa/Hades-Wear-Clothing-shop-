import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:3030/users';

export const loginUser = createAsyncThunk('auth/loginUser', 
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/login`, { email, password })
            return response.data;
        } catch(err) {
            return rejectWithValue(err.response.data.message) || 'Login failed!'
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${baseUrl}/register`, { email, password });
        return response.data;
      } catch (err) {
        return rejectWithValue(  err.response?.data?.message || 'Registration failed');
      }
    }
  );

  const initialState = {
    user: JSON.parse(localStorage.getItem('user') || null),
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null
  }

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state,action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.accessToken;

            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('token', action.payload.accessToken);

        })
        .addCase(registerUser.fulfilled, (state,action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.accessToken;

            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('token', action.payload.accessToken);

        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Authentication failed';
          });
    }
  })

  export const {logout} = authSlice.actions
  export default authSlice.reducer;