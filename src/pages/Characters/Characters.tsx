import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';

import { graphql } from '@/gql/gql';

const GET_CHARACTERS = graphql(/* GraphQL */ `
  query getChractes {
    characters(page: 1, filter: { name: "", status: "", species: "", type: "", gender: "" }) {
      results {
        name
      }
    }
  }
`);

function Characters() {
  const { data } = useQuery(GET_CHARACTERS);

  console.log(data);
  return (
    <>
      <Typography>Hello Rick And Morty characters</Typography>
    </>
  );
}

export { Characters };
