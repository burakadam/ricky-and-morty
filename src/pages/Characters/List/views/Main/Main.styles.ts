import styled from '@emotion/styled';
import { ImageList } from '@mui/material';

const CardList = styled(ImageList)`
  margin-top: 0;
  margin-left: 16px;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr) !important;
    margin-left: 0;
  }
`;

const PaginationContainer = styled('div')`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    li > div {
      padding: 0 3px;
      margin: 0;
      min-width: 22px;
    }
    li > button {
      min-width: 22px;
      height: 22px;
    }
  }
`;

export { CardList, PaginationContainer };
