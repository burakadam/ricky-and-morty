import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { REDUCERS } from '@/constants/reducers';

import { charactersReducer } from './characters';

export const store = configureStore({
  reducer: {
    [REDUCERS.CHARACTERS]: charactersReducer
  }
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: {
      [REDUCERS.CHARACTERS]: charactersReducer
    },
    preloadedState
  });
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
