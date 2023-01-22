import type { ILayoutProps } from '.';
import { Footer } from './Layout.footer';
import { Header } from './Layout.header';

const Layout = (props: ILayoutProps) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export { Layout };
