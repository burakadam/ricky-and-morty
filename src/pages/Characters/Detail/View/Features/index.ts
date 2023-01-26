type TFeature = {
  status: string;
  gender: string;
  species: string;
  type: string;
};

export interface IFeaturesProps {
  list: Array<TFeature>;
}

export * from './Features';
