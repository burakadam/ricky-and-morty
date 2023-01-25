import { gql, useQuery } from '@apollo/client';
import { ImageList } from '@mui/material';

import { Card } from '@/components/Card';
import type { Character } from '@/gql/graphql';
import { charactesSelectors } from '@/store/characters';
import { useAppSelector } from '@/store/hooks';

const GET_CHARACTERS = gql(/* GraphQL */ `
  query getCharacters($page: Int, $name: String, $status: String, $gender: String) {
    characters(page: $page, filter: { name: $name, status: $status, gender: $gender }) {
      results {
        name
        id
        image
        status
        gender
        type
        species
      }
    }
  }
`);

const Main = () => {
  const { name, status, species, type, gender, page } = useAppSelector(charactesSelectors.selectCharactersFilters);

  const { loading, data } = useQuery(GET_CHARACTERS, { variables: { name, status, species, type, gender, page } });

  if (loading) return <p>...loading</p>;

  console.log(data);

  return (
    <div>
      <ImageList cols={3} gap={8}>
        {data?.characters?.results.map((item: Character) => (
          <Card key={item.id} character={item} />
        ))}
      </ImageList>
    </div>
  );
};

export { Main };
