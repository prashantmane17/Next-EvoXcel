import Image from "next/image";
import * as React from "react";

export function Avatar({ children, className, ...props }) {
  return (
    <div className={`rounded-full ${className}`} {...props}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt, className, ...props }) {
  return (
    <Image
      src={src}
      width={300}
      height={300}
      alt={alt}
      className={`rounded-full ${className}`}
      {...props}
    />
  );
}

export function AvatarFallback({ children, className, ...props }) {
  return (
    <div className={`rounded-full bg-gray-300 ${className}`} {...props}>
      {children}
    </div>
  );
}
