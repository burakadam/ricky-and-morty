/* eslint-disable testing-library/no-node-access */
import { screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import type { Character } from '@/gql/graphql';
import { renderWithProviders } from '@/utils/testUtils';

import { Card } from '../Card';

const SAMPLE: Character = {
  __typename: 'Character',
  name: 'Alien Googah',
  id: '13',
  image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
  status: 'unknown',
  gender: 'unknown',
  type: 'type',
  species: 'Alien',
  episode: []
};

const FEATURES = `${SAMPLE.status} / ${SAMPLE.gender} / ${SAMPLE.type} / ${SAMPLE.species} /`;

describe('Character list card', () => {
  let container: HTMLElement;

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    ({ container } = renderWithProviders(
      <Router>
        <Card character={SAMPLE} />
      </Router>
    ));
  });

  it('render component correctly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  it('contain list of status, gender, type and species', () => {
    expect(screen.getByText(FEATURES)).toBeInTheDocument();
  });

  it('contain name of the image url', () => {
    const image = container.querySelector('img') as HTMLImageElement;
    expect(image.src).toEqual(SAMPLE.image);
  });

  it('contain url with character id', () => {
    const link = container.querySelector('a') as HTMLAnchorElement;
    expect(link.href).toEqual(`http://localhost/characters/${SAMPLE.id}`);
  });
});
