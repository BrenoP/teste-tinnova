import type { HTMLInputTypeAttribute } from "react";

type InputProps = {
  type?: HTMLInputTypeAttribute 
}

function Input({ type = "text" } : InputProps) {
  return ( 
    <input type={type} />
  );
}

export default Input;