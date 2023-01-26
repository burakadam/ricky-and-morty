import { Avatar } from '@mui/material';

import type { IBannerProps } from '.';
import * as S from './Banner.styles';

const Banner = (props: IBannerProps) => (
  <S.Container>
    <Avatar alt={props.name} src={props.image} sx={{ width: 200, height: 200 }} />
  </S.Container>
);

export { Banner };
