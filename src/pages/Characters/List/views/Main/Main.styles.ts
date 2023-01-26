import styled from '@emotion/styled';
import { ImageList } from '@mui/material';

const CardList = styled(ImageList)`
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr) !important;
  }
`;

export { CardList };