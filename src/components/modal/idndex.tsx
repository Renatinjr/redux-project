import React from "react";

type ModalProps = {
  chilren: React.ReactNode;
  display?: string;
};

export default function Modal({ chilren, display }: ModalProps) {
  return (
    <section
      className={`absolute flex bg-black z-20 w-full h-full top-0 left-0 bg-opacity-10 ${display}`}
    >
      {chilren}
    </section>
  );
}
