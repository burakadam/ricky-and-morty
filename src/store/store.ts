import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { REDUCERS } from '@/constants/reducers';

import { charactersReducer } from './characters';

export const store = configureStore({
  reducer: {
    [REDUCERS.CHARACTERS]: charactersReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;