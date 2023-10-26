import React, { MouseEventHandler } from "react";

const colors = {
  emerald: "#2ecc71",
  alizarin: "#e74c3c",
  clouds: "#ecf0f1",
  "midnight-blue": "#2c3e50",
  "peter-river": "#3498db",
};

type Color = keyof typeof colors;

interface Props {
  color: Color;
  bgColor: Color;
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  color = "clouds",
  bgColor = "midnight-blue",
  onClick,
}: Props) => {
  return (
    <button
      style={{ color: colors[color], backgroundColor: colors[bgColor] }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

{
  /* <Button color="emerald" bgColor="midnight-blue">Click me</Button> */
}
