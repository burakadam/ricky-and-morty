import { render } from '@/utils/testUtils';

import { Loading } from '../Loading';

describe('loading component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    ({ container } = render(<Loading />));
  });

  it('render component correctly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  it('has loading animation', () => {
    const loader = container.querySelector('div') as HTMLElement;
    const loaderStyle = window.getComputedStyle(loader).animation;

    expect(loaderStyle).toEqual('animation-116j0z6 1.5s infinite');
  });
});
