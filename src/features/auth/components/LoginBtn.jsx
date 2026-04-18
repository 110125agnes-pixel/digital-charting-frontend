import { FaShieldAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LoginBtn = ({ className, btnIcon, onClick }) => {
  return (
    <Button
      className={cn(
        "inline-flex w-full items-center justify-center gap-2",
        className,
      )}
      variant="primary"
      onClick={onClick}
    >
      {btnIcon ?? <FaShieldAlt />}
      <span>Login</span>
    </Button>
  );
};

export default LoginBtn;
