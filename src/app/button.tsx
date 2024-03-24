import React, {
  MouseEventHandler,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

interface ButtonProps {
  onClick: () => void;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Button = ({ onClick, text, children, className }: ButtonProps) => {
  if (children === undefined) {
    children = <>{text}</>;
  }
  return (
    <button
      className={`py-1 px-5 my-2 font-sans rounded-xl bg-krem bg-opacity-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
