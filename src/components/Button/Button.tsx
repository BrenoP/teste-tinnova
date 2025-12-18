import type { ReactNode } from "react";
import { ButtonComponent } from "./Button.style";

type ButtonProps = {
  children: ReactNode;
  disabled: boolean;
};

function Button({ children, disabled } : ButtonProps) {
  return ( 
    <ButtonComponent disabled={disabled}>{children}</ButtonComponent>
  );
}

export default Button;