import { gql, useQuery } from '@apollo/client';
import { Box, ImageList, Pagination } from '@mui/material';

import { Card } from '@/components/Card';
import type { Character } from '@/gql/graphql';
import { charactersAction, charactesSelectors } from '@/store/characters';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

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
      info {
        pages
      }
    }
  }
`);

const Main = () => {
  const dispatch = useAppDispatch();
  const { name, status, species, type, gender, page } = useAppSelector(charactesSelectors.selectCharactersFilters);

  const { loading, data, error } = useQuery(GET_CHARACTERS, { variables: { name, status, species, type, gender, page } });

  const handlePagination = (_: unknown, v: number) => dispatch(charactersAction.setPage(v));

  if (loading) return <p>...loading</p>;
  if (error) return <p>ops something went wrong</p>;

  return (
    <div>
      <ImageList cols={3} gap={8}>
        {data?.characters?.results.map((item: Character) => (
          <Card key={item.id} character={item} />
        ))}
      </ImageList>
      <Box my={10} display="flex" justifyContent="center">
        <Pagination count={data?.characters?.info.pages} color="primary" page={page} onChange={handlePagination} />
      </Box>
    </div>
  );
};

export { Main };
