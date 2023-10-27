import React, { useEffect } from "react";

import { DisplayBooks } from "../components/DisplayBooks";

export const BooksPage = () => {
  useEffect(() => {
    console.log("books: mount");
    return () => console.log("books unmount");
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <DisplayBooks />
    </div>
  );
};
