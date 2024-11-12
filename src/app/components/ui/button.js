import * as React from "react";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`rounded-md bg-blue-500 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
