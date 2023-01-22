import { AppBar } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.main
}));

const Header = styled(AppBar)`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

const Logo = styled('img')`
  height: 40px;
  width: auto;
  align-self: flex-start;
  margin-top: 5px;
`;

const TextLogo = styled('img')`
  height: 30px;
  width: auto;
  align-items: flex-end;
  margin-top: 10px;
`;

export { Container, Header, Logo, TextLogo };
