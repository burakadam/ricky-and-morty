import { createSlice } from '@reduxjs/toolkit';

import { REDUCERS } from '@/constants/reducers';

import type { ICharactersState } from '.';

const initialState: ICharactersState = {
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  page: 1
};

const charactersSlice = createSlice({
  name: REDUCERS.CHARACTERS,
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    }
  }
});

export const charactersAction = charactersSlice.actions;

export default charactersSlice.reducer;
