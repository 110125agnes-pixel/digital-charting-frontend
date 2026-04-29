import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

function ButtonWithIcon({ children, className, btnIcon, onClick }) {
  return (
    <Button
      className={cn(
        "inline-flex w-full items-center justify-center gap-2",
        className,
      )}
      variant="primary"
      onClick={onClick}
    >
      {btnIcon ?? null}
      <span>{children}</span>
    </Button>
  );
}

export default ButtonWithIcon;
