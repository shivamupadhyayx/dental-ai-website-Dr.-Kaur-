"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-sans transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-gradient-to-br from-primary to-primary-container text-white rounded-xl hover:shadow-[0_8px_30px_rgba(0,104,95,0.25)] hover:scale-[1.02]",
    secondary:
      "bg-surface-container-highest text-primary rounded-xl hover:shadow-ambient hover:scale-[1.02]",
    outline:
      "border border-outline-variant text-primary rounded-xl hover:bg-surface-container-low hover:border-primary/30",
    ghost:
      "text-primary hover:bg-surface-container-low rounded-xl",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
