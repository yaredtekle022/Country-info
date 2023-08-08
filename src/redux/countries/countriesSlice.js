import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import StatusType from '../../components/StatusTypes';

const API_URL = 'http://api.geonames.org/countryInfoJSON?username=yaredtekle22';
export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    try {
      const response = await axios.get(API_URL);
      console.log('dispatch', response.data.geonames);
      return response.data.geonames;
    } catch (error) {
      console.error('Error en la solicitud API:', error);
      throw new Error(error.message);
    }
  },
);

const initialState = {
  countriesArr: [],
  filteredList: [],
  status: StatusType.LOADING,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    updateFoundList: (state, action) => {
      const filteredList = state.countriesArr.filter(
        (country) => country.countryName.toLowerCase().includes(action.payload.toLowerCase()),
      );
      state.filteredList = filteredList;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = StatusType.FULFILLED;
        state.countriesArr = action.payload;
      })
      .addCase(getCountries.pending, (state) => {
        state.status = StatusType.LOADING;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = StatusType.ERROR;
        state.error = action.error.message;
      });
  },
});

export const { updateFoundList } = countriesSlice.actions;
export default countriesSlice.reducer;
