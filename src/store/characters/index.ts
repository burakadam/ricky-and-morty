export interface ICharactersState {
  name: string;
  status: string;
  species: string;
  gender: string;
  page: number;
}

export * from './characters.selectors';
export * from './characters.slice';
export { default as charactersReducer } from './characters.slice';
