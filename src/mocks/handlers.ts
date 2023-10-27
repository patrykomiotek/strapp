// import { graphql, HttpResponse } from "msw";
import { graphql } from "msw";

const books = [
  {
    id: 3,
    title: "Three",
    author: "Three again",
  },
];

export const handlers = [
  graphql.query("Books", (req, res, ctx) => {
    console.log('Intercepted a "Books" GraphQL query:');

    return res(
      ctx.status(200),
      ctx.data({
        books: books,
      })
    );

    // return HttpResponse.json({
    //   data: {
    //     // Convert all posts to an array
    //     // and return as the "posts" root-level property.
    //     books,
    //   },
    // });
  }),
];
