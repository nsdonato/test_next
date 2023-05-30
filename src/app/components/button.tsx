import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  id: number;
};

export const Button = ({ children, id }: ButtonProps) => {
  const ruta = `/character/${id}`;
  return (
    <Link
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      href={ruta}
    >
      {children}
    </Link>
  );
};
