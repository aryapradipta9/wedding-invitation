import {
  MouseEventHandler,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      className="p-2 my-2 font-sans rounded-xl"
      style={{
        backgroundColor: "#f0c37c",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
