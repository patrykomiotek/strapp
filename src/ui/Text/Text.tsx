import React from "react";

interface Props {
  readonly children: string;
}

export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};
