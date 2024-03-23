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
}

export const Button = ({ onClick, text, children }: ButtonProps) => {
  if (children === undefined) {
    children = <>{text}</>;
  }
  return (
    <button
      className="p-2 my-2 font-sans rounded-xl"
      style={{
        backgroundColor: "#f0c37c",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
