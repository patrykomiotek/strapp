import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { Button } from "@ui/Button";
import { Button } from "../../ui/Button";

export const Generator = () => {
  const [id, setId] = useState(uuidv4());

  const handleClick = () => {
    setId(uuidv4());
  };

  return (
    <div>
      <p>{id}</p>
      <Button onClick={handleClick}>Refresh</Button>
    </div>
  );
};
