import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useReducer, useState } from 'react';

import type { FilterCharacter } from '@/gql/graphql';
import { charactersAction } from '@/store/characters';
import { useAppDispatch } from '@/store/hooks';

import { GENDER, STATUS } from './Filters.constants';
import * as S from './Filters.styles';

const Filters = () => {
  const dispatch = useAppDispatch();
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [formInput, setFormInput] = useReducer(
    (state: FilterCharacter, newState: FilterCharacter) => ({ ...state, ...newState }),
    {
      name: '',
      species: '',
      status: '',
      gender: ''
    }
  );

  const handleInput = (e: { target: { name: string; value: string } }) => setFormInput({ [e.target.name]: e.target.value });

  const handleSubmit = () => dispatch(charactersAction.setFilters(formInput));

  const handleFilterShown = () => setIsFiltersOpen(!isFiltersOpen);

  return (
    <S.Container>
      <Typography variant="h5" mb={2}>
        FILTERS
      </Typography>
      <Button variant="outlined" onClick={handleFilterShown}>
        {isFiltersOpen ? 'Hide' : 'Show'} Filters
      </Button>
      <S.Form className={isFiltersOpen ? 'filter-open' : ''}>
        <S.FilterRow>
          <TextField name="name" label="Name" variant="outlined" onChange={handleInput} defaultValue={formInput.name} />
        </S.FilterRow>
        <S.FilterRow>
          <TextField name="species" label="Species" variant="outlined" onChange={handleInput} />
        </S.FilterRow>
        <S.FilterRow>
          <span>Status</span>
          <Select value={formInput.status as string} name="status" onChange={handleInput}>
            {STATUS.map((item, index) => (
              <MenuItem value={item.value} key={index}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </S.FilterRow>
        <S.FilterRow>
          <span>Gender</span>
          <Select value={formInput.gender as string} name="gender" onChange={handleInput}>
            {GENDER.map((item, index) => (
              <MenuItem value={item.value} key={index}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </S.FilterRow>
        <S.FilterRow>
          <Button variant="contained" onClick={handleSubmit}>
            Send
          </Button>
        </S.FilterRow>
      </S.Form>
    </S.Container>
  );
};

export { Filters };
