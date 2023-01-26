import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Title = styled(Typography)`
  font-size: 30px;
  text-align: center;
  margin-bottom: 1em;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export { Title };
