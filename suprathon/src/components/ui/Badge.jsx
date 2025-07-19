import React from 'react';
import { cn } from '../../lib/utils';

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-[#022B3A] text-white",
    secondary: "bg-[#1F7A8C] text-white",
    success: "bg-green-100 text-green-800 border border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    danger: "bg-red-100 text-red-800 border border-red-200",
    outline: "border-2 border-[#1F7A8C] text-[#1F7A8C] bg-transparent"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export default Badge;
