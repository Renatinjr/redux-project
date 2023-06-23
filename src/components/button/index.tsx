import { MouseEventHandler, ReactNode } from "react";
type ButtonPorps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
};

export default function Button({ children, className, onClick }: ButtonPorps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
