import { Typography } from '@mui/material';

import IMAGE from '@/assets/images/rick-and-morty-green-hole.png';

import * as S from './Layout.styles';

const Footer = () => (
  <S.Footer>
    <S.FooterImage src={IMAGE} />
    <S.CreatedBy>
      <Typography variant="caption" display="block">
        Created By:
      </Typography>
      <Typography variant="caption" display="block" color="crimson" fontWeight="bold">
        Dan Harmon - Justin Roiland
      </Typography>
    </S.CreatedBy>
  </S.Footer>
);

export { Footer };
