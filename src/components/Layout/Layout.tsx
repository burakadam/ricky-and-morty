import type { ILayoutProps } from '.';
import { Footer } from './Layout.footer';
import { Header } from './Layout.header';
import * as S from './Layout.styles';

const Layout = (props: ILayoutProps) => (
  <S.Container>
    <Header />
    {props.children}
    <Footer />
  </S.Container>
);

export { Layout };
