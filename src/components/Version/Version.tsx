import React from "react";

export const Version = () => {
  return (
    <div>
      <p>Version: {process.env.REACT_APP_APP_VERSION}</p>
    </div>
  );
};
