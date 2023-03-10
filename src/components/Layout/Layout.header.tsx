import { Slide, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom';

import TEXT_LOGO from '@/assets/images/rick-and-morty-logo-text.png';
import LOGO from '@/assets/images/rick-and-morty-silhouette.jpg';
import ROUTES from '@/constants/routes';

import type { IHideOnScrollProps } from '.';
import * as S from './Layout.styles';

function HideOnScroll(props: IHideOnScrollProps) {
  const trigger = useScrollTrigger({ target: window || undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

const Header = () => (
  <HideOnScroll>
    <S.Header position="fixed" color="primary">
      <Link to={ROUTES.CHARACTERS}>
        <S.Logo src={LOGO} alt="Rick and Morty silhoutte" />
      </Link>
      <S.TextLogo src={TEXT_LOGO} alt="Rick and Morty show text logo" />
    </S.Header>
  </HideOnScroll>
);

export { Header };
