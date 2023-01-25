import { REDUCERS } from '@/constants/reducers';

import type { RootState } from '../store';

const selectCharactersFilters = (state: RootState) => state[REDUCERS.CHARACTERS];

export { selectCharactersFilters };
