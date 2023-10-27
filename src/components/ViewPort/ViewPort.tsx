import React, { useState } from "react";
import { useViewPort } from "../../hooks/useViewPort";

export const ViewPort = () => {
  const size = useViewPort();
  // const [newSize, setNewSize] = useState(size);

  return (
    <div>
      <p>
        X: {size.x}, Y: {size.y}
      </p>
    </div>
  );
};
