import styled from '@emotion/styled';
import { List, ListItem } from '@mui/material';

const Container = styled('div')`
  margin-top: 60px;
  > h4 {
    margin-bottom: 20px;
  }
`;

const Roster = styled(List)`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled(ListItem)`
  flex: 1 1 300px;
`;

export { Container, Item, Roster };
