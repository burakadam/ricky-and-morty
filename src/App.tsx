import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';

import { Layout } from '@/components/Layout';
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
    <Layout>
      <Typography>Hello Rick And Morty</Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor,
        laborum facilis molestias aperiam aliquid, minus recusandae eaque magni
        dignissimos totam repellat accusamus dolores consectetur ab,
        necessitatibus ipsum doloremque architecto.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor,
        laborum facilis molestias aperiam aliquid, minus recusandae eaque magni
        dignissimos totam repellat accusamus dolores consectetur ab,
        necessitatibus ipsum doloremque architecto.
      </p>
      ;
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor,
        laborum facilis molestias aperiam aliquid, minus recusandae eaque magni
        dignissimos totam repellat accusamus dolores consectetur ab,
        necessitatibus ipsum doloremque architecto.
      </p>
      ;
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor,
        laborum facilis molestias aperiam aliquid, minus recusandae eaque magni
        dignissimos totam repellat accusamus dolores consectetur ab,
        necessitatibus ipsum doloremque architecto.
      </p>
      ;
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor,
        laborum facilis molestias aperiam aliquid, minus recusandae eaque magni
        dignissimos totam repellat accusamus dolores consectetur ab,
        necessitatibus ipsum doloremque architecto.
      </p>
      ;
    </Layout>
  );
}

export default App;
