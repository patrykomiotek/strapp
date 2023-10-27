import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, store } from "../store";
import { addNumber } from "../postsReducer";

export const AboutPage = () => {
  const total = useSelector((state: RootState) => state.posts.total);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("about: mount");

    // store.getState();
    // addNumber: () => store.dispatch({ type: 'posts/addNumber' });

    return () => console.log("about unmount");
  }, []);
  return (
    <div>
      <h1>About</h1>
      <p>Total: {total}</p>
      <button onClick={() => dispatch(addNumber(12))}>Update</button>
    </div>
  );
};
