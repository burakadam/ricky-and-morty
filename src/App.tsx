import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';

import { graphql } from '@/gql/gql';

const GET_CHARACTERS = graphql(/* GraphQL */ `
  query getChractes {
    characters(
      page: 1
      filter: { name: "", status: "", species: "", type: "", gender: "" }
    ) {
      results {
        name
      }
    }
  }
`);

function App() {
  const { data } = useQuery(GET_CHARACTERS);

  console.log(data);
  return (
    <div className="App">
      <Typography>Hello Rick And Morty</Typography>
    </div>
  );
}

export default App;
