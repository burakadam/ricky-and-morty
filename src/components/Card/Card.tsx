import { ImageListItem, ImageListItemBar } from '@mui/material';

import ROUTES from '@/constants/routes';

import type { ICardItemProps } from '.';
import * as S from './Card.styles';

const Card = ({ character }: ICardItemProps) => {
  const { image, name, id, ...rest } = character;
  const subtitle = Object.values(rest).join(' / ');

  return (
    <ImageListItem>
      <S.Nav to={`${ROUTES.CHARACTERS}/${id}`} />
      <img src={image ?? ''} alt={name ?? 'Character'} loading="lazy" />
      <ImageListItemBar title={name} subtitle={<p>{subtitle}</p>} />
    </ImageListItem>
  );
};

export { Card };
