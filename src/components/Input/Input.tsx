import type { HTMLInputTypeAttribute } from "react";
import TextField from "@mui/material/TextField";

type InputProps = {
  type?: HTMLInputTypeAttribute; 
  placeholder?: string;
  onError?: boolean;
  errorMessage?: string;
}

function Input({ 
  type = "text", 
  placeholder, 
  onError, 
  errorMessage, 
  ...rest  
} : InputProps) {
  return ( 
    <TextField 
      label={placeholder} 
      variant="standard" 
      type={type} 
      error={onError}
      helperText={errorMessage}
      {...rest} 
    />
  );
}

export default Input;