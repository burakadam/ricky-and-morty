import { useQuery } from '@apollo/client';

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

const Main = () => {
  const { data } = useQuery(GET_CHARACTERS);

  console.log(data);
  return <div>List</div>;
};

export { Main };
