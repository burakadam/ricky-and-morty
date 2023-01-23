import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import IMAGE from '@/assets/images/rick-and-morty-green-hole.png';
import ROUTES from '@/constants/routes';

import * as S from './Layout.styles';

const Footer = () => (
  <S.Footer>
    <Link to={ROUTES.CHARACTERS}>
      <S.FooterImage src={IMAGE} />
    </Link>
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
