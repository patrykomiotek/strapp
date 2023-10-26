import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../ui";

export const Generator = () => {
  const [id, setId] = useState(uuidv4());

  const handleClick = () => {
    setId(uuidv4());
  };

  return (
    <div>
      <p>{id}</p>
      <Button color="clouds" bgColor="midnight-blue" onClick={handleClick}>
        Refresh
      </Button>
    </div>
  );
};
