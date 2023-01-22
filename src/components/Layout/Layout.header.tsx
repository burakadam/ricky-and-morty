import { Slide, useScrollTrigger } from '@mui/material';

import TEXT_LOGO from '@/assets/images/rick-and-morty-logo-text.png';
import LOGO from '@/assets/images/rick-and-morty-silhouette.jpg';

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
      <S.Logo src={LOGO} />
      <S.TextLogo src={TEXT_LOGO} />
    </S.Header>
  </HideOnScroll>
);

export { Header };
