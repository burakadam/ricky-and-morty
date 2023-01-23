import { Outlet } from 'react-router-dom';

import { Footer } from './Layout.footer';
import { Header } from './Layout.header';
import * as S from './Layout.styles';

const Layout = () => (
  <S.Container>
    <Header />
    <S.Content>
      <Outlet />
    </S.Content>
    <Footer />
  </S.Container>
);

export { Layout };
