import * as React from "react";
import { cn } from "@/lib/utils";

const Label = ({ className, ...props }) => {
  return (
    <label
      className={cn(
        "mb-2 block text-xs font-semibold uppercase tracking-wide text-neut-700",
        className
      )}
      {...props}
    />
  );
};

Label.displayName = "Label";

export { Label };
