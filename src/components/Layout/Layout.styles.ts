import { AppBar } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled('div')`
  padding: 50px 20px 0 20px;
`;

const Content = styled('div')`
  min-height: 100vh;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding: 30px 0;
`;

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

const Footer = styled('footer')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px 20px 10px;
`;

const FooterImage = styled('img')`
  width: 100%;
  max-width: 150px;
`;

const CreatedBy = styled('div')`
  display: flex;
  margin: 20px 0;
  opacity: 0.8;
  > span {
    margin: 0 0.2em;
  }
`;

export { Container, Content, CreatedBy, Footer, FooterImage, Header, Logo, TextLogo };
