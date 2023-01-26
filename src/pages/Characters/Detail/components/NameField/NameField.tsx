import { Typography } from '@mui/material';

import type { INameFieldProps } from '.';
import * as S from './NameField.styles';

const NameField = (props: INameFieldProps) => {
  return (
    <S.Container>
      <Typography component="span">{props.title}</Typography>
      <Typography variant={props.variant}>{props.label}</Typography>
    </S.Container>
  );
};

export { NameField };
