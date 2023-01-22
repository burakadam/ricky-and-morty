import { ApolloClient, InMemoryCache } from '@apollo/client';

const CLIENT = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default CLIENT;
