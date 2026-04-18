import React from "react";
import { Button } from "@/components/ui/button";

/**
 * LoginBtn component
 * @param {object} props
 * @param {React.ReactNode} props.btnIcon - Icon to display in the button
 * @param {function} props.onClick - Click handler for the button
 */
const LoginBtn = ({ btnIcon, onClick }) => {
  return (
    <Button onClick={onClick} className="w-full flex items-center justify-center gap-2">
      {btnIcon}
      <span>Login</span>
    </Button>
  );
};

export default LoginBtn;
