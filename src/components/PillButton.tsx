"use client";

import Link from "next/link";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  className?: string;
}

export default function PillButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  className = "",
}: PillButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-normal transition-all duration-200 ease-out rounded-full";

  const variantStyles = {
    primary: "bg-accent text-white hover:scale-[1.02] hover:shadow-md",
    outline: "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent",
    dark: "bg-background-dark text-white hover:scale-[1.02] hover:shadow-md",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  );
}
