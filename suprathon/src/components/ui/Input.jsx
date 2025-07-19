import React from 'react';
import { cn } from '../../lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border-2 border-[#BFDBF7] bg-white px-4 py-2 text-base text-[#022B3A] placeholder:text-[#1F7A8C]/60 focus:border-[#1F7A8C] focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]/20 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
        className
      )}
      ref={ref}
      {...props}
    />
  )
});
Input.displayName = "Input";

export default Input;
