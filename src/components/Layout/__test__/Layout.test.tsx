// import { screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { renderWithProviders, screen } from '@/utils/testUtils';

import { Layout } from '../Layout';

describe('App Layout component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    ({ container } = renderWithProviders(
      <Router>
        <Layout />
      </Router>
    ));
  });

  it('render component correctly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  it('header has a home url', () => {
    const link = container.querySelector('header a') as HTMLAnchorElement;
    expect(link.href).toEqual(`http://localhost/characters`);
  });

  it('footer has creaters names', () => {
    expect(screen.getByText('Dan Harmon - Justin Roiland')).toBeInTheDocument();
  });
});
