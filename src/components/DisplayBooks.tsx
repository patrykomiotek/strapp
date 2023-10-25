import React from "react";
import { useQuery } from "@apollo/client";

import { GET_BOOKS } from "../gql/Queries";

interface Book {
  id: number;
  title: string;
  author: string;
}

interface BooksResponse {
  books: Book[];
}

export const DisplayBooks = () => {
  const { loading, error, data } = useQuery<BooksResponse>(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data?.books.map(({ id, title, author }) => (
    <div key={id}>
      <h3>{title}</h3>
      <b>{author}</b>
      <br />
    </div>
  ));
};
