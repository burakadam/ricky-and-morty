import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from './Layout.footer';
import { Header } from './Layout.header';
import * as S from './Layout.styles';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export { Layout };
