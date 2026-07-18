import React from "react";

interface FlipTextProps {
  children: string;
  className?: string;
}

export default function FlipText({ children, className = "" }: FlipTextProps) {
  return (
    <span className={`flip-wrapper ${className}`}>
      <span className="flip-text">{children}</span>
      <span className="flip-text-clone" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}
