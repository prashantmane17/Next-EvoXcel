import * as React from "react";

export function Input({ className, ...props }) {
  return (
    <input
      className={`border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
