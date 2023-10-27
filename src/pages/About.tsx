import React, { useEffect } from "react";

export const AboutPage = () => {
  useEffect(() => {
    console.log("about: mount");
    return () => console.log("about unmount");
  }, []);
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
