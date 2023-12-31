import React from "react";

interface Props {
  readonly children: string | string[] | number | React.ReactElement;
}

export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};
