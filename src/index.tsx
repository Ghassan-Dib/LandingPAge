import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  NormalizedCacheObject
} from '@apollo/client';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
