import React, { useEffect } from "react";

export const ContactPage = () => {
  useEffect(() => {
    console.log("contact: mount");
    return () => console.log("contact unmount");
  }, []);

  return (
    <div>
      <h1>Contact Header</h1>
    </div>
  );
};
