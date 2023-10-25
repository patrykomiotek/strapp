import React from "react";
// import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import "./index.css";
import App from "./App";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    // eslint-disable-next-line array-callback-return
    graphqlErrors.map(({ message, location, path }) => {
      console.error(`GraphQL error: ${path}, ${location}, ${message}`);
    });
  }
  if (networkError) {
    console.log("Network error");
  }
});
const link = from([
  errorLink,
  new HttpLink({
    // uri: "https://flyby-router-demo.herokuapp.com/",
    uri: "http://localhost:4000",
  }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById("root");

// root.render(
render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  root
);
