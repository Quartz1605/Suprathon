import React from 'react';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-[#022B3A] text-white hover:bg-[#022B3A]/90",
    secondary: "bg-[#1F7A8C] text-white hover:bg-[#1F7A8C]/90",
    outline: "border-2 border-[#1F7A8C] text-[#1F7A8C] bg-transparent hover:bg-[#1F7A8C] hover:text-white",
    ghost: "text-[#022B3A] hover:bg-[#E1E5F2]",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };

  const sizes = {
    default: "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base",
    sm: "px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm",
    lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg",
    icon: "p-2 sm:p-3"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;
