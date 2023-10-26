import { v4 as uuidv4 } from "uuid";
import React, { forwardRef, type ComponentPropsWithRef, ForwardedRef } from "react";

interface Props {
  label: string;
}

export const Input = forwardRef(({
  label,
  ...rest
}: ComponentPropsWithRef<"input"> & Props,
ref: ForwardedRef<HTMLInputElement>
) => {
  const id = uuidv4();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} {...rest} />
    </div>
  );
});

// Input.displayName = 'Input (forwardRef)';
Input.displayName = 'forwardRef(Input)';