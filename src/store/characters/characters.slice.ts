import { createSlice } from '@reduxjs/toolkit';

import { REDUCERS } from '@/constants/reducers';

import type { ICharactersState } from '.';

const initialState: ICharactersState = {
  name: '',
  status: '',
  species: '',
  gender: '',
  page: 1
};

const charactersSlice = createSlice({
  name: REDUCERS.CHARACTERS,
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setFilters(state, action) {
      state.name = action.payload.name;
      state.species = action.payload.species;
      state.status = action.payload.status;
      state.gender = action.payload.gender;
    }
  }
});

export const charactersAction = charactersSlice.actions;

export default charactersSlice.reducer;
