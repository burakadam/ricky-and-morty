import { Typography } from '@mui/material';

import LOGO from '@/assets/images/rick-and-morty-silhouette.jpg';

import * as S from './Loading.styles';

const Loading = () => (
  <S.Container>
    <S.Logo src={LOGO} alt="Rick and Morty silhoutte" />
    <Typography>LOADING</Typography>
  </S.Container>
);

export { Loading };
