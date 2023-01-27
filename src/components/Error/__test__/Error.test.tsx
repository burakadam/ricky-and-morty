/* eslint-disable testing-library/no-node-access */
import { screen } from '@testing-library/react';

import { render } from '@/utils/testUtils';

import { Error } from '../Error';

const MESSAGE = 'Character not found!';

describe('error text component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    ({ container } = render(<Error message={MESSAGE} />));
  });

  it('render component correctly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  it('contain error message', () => {
    expect(screen.getByText(MESSAGE)).toBeInTheDocument();
  });

  it('contain default error message without message', () => {
    render(<Error />);
    expect(screen.getByText(MESSAGE)).toBeInTheDocument();
  });
});
