import { ApolloClient, InMemoryCache } from '@apollo/client';

const CLIENT = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
  name: 'RickAndMorty',
  version: '1.0'
});

export default CLIENT;
