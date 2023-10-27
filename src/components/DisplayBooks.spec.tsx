import React from "react";
import { render } from "@testing-library/react";
import { DisplayBooks } from "./DisplayBooks";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

describe("DisplayBooks component", () => {
  it("should display mocked data", () => {
    const client = new ApolloClient({
      uri: "http://localhost:4000",
      cache: new InMemoryCache(),
    });
    const { debug } = render(
      <ApolloProvider client={client}>
        <DisplayBooks />
      </ApolloProvider>
    );
  });
});
