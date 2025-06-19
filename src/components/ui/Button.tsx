import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef, RefObject } from "react";
import { cn } from "../../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 text-sm font-medium rounded-md transition-all active:outline-none disabled:pointer-events-none hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-custom-blue text-white hover:bg-slate-700",
        outline:
          "bg-transparent border border-custom-blue color-custom-blue hover:bg-slate-100",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        link: "bg-transparent text-white underline-offset-4 hover:underline hover:translate-y-[-4px] active:text-slate-300",

        // Variants below are not in use.  Reserved for to future.
        subtle: "bg-slate-100 text-slate-900 hover:bg-slate-200 ",
        ghost:
          "bg-transparent dark:bg-transparent hover:bg-slate-100 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: RefObject<HTMLButtonElement | null>;
}

const Button = ({ className, size, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
export { Button, buttonVariants };
