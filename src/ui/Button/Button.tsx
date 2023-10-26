import React, { type MouseEventHandler, type ComponentProps } from "react";

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
  // onClick: MouseEventHandler<HTMLButtonElement>;
}

type ButtonProps = ComponentProps<'button'> & Props;

export const Button = ({
  children,
  color = "clouds",
  bgColor = "midnight-blue",
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      style={{ color: colors[color], backgroundColor: colors[bgColor] }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

{/* <Button color="emerald" bgColor="midnight-blue" type="">Click me</Button> */}

