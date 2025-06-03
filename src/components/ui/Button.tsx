// components/ui/Button.tsx
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1 text-center inline-block";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg",
    secondary: "bg-white text-indigo-600 hover:bg-gray-50 hover:shadow-lg",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
