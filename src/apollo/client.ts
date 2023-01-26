import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(() =>
      // { message, locations, path }
      {
        // console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      }
    );
  if (networkError) {
    // console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' });

const CLIENT = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
  name: 'RickAndMorty',
  version: '1.0'
});

export default CLIENT;
