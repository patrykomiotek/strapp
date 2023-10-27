import React, { ComponentProps } from "react";

const colors = {
  emerald: "#2ecc71",
  alizarin: "#e74c3c",
  clouds: "#ecf0f1",
  "midnight-blue": "#2c3e50",
  "peter-river": "#3498db",
};

type Color = keyof typeof colors;
// ReturnType<typeof Label>

interface Props {
  color?: Color;
  bgColor?: Color;
  children: string;
  // onClick: MouseEventHandler<HTMLButtonElement>;
}

// Pick
// Omit
// Required
// Partial
// Readonly

// type ButtonProps = Required<Pick<ComponentProps<'button'>, 'type' | 'onClick'>> & Props;
type ButtonProps = Pick<ComponentProps<"button">, "type" | "onClick"> & Props;

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
