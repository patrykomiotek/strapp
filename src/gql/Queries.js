import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const GET_BOOKS = gql`
  query Books {
    books {
      id
      author
      title
    }
  }
`;
