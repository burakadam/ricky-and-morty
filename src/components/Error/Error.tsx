import { Typography } from '@mui/material';

import type { IErrorProps } from '.';
import * as S from './Error.style';

const Error = (props: IErrorProps) => {
  return (
    <S.Container>
      <Typography color="reset">{props.message || 'oops! Something went wrong'}</Typography>
    </S.Container>
  );
};

export { Error };
