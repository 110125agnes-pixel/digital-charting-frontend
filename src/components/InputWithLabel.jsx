import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

function InputWithLabel({
  id,
  label,
  onChange,
  value,
  inputIcon,
  className,
  ...props
}) {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <Label
          htmlFor={id}
          className="mb-2 block text-xs font-semibold tracking-wide uppercase"
        >
          {label}
        </Label>
      )}

      <div className="relative">
        {inputIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neut-400">
            {inputIcon}
          </div>
        )}

        <Input
          id={id}
          value={value}
          onChange={onChange}
          className={cn(inputIcon ? "pl-12" : "pl-3", "h-14 text-sm")}
          {...props}
        />
      </div>
    </div>
  );
}

export default InputWithLabel;
