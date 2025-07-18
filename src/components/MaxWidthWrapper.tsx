import React, { ReactNode } from "react";
import { cn } from "../utils";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-8",
        className
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
