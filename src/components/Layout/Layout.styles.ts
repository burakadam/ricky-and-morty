import styled from '@emotion/styled';
import { AppBar } from '@mui/material';

const Header = styled(AppBar)`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  align-self: flex-start;
  margin-top: 5px;
`;

const TextLogo = styled.img`
  height: 30px;
  width: auto;
  align-items: flex-end;
  margin-top: 10px;
`;

export { Header, Logo, TextLogo };
