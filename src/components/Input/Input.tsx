import type { HTMLInputTypeAttribute } from "react";
import TextField from "@mui/material/TextField";
import {
  createTheme,
  ThemeProvider,
  useTheme,
  type Theme,
} from "@mui/material/styles";
import colors from "../../style/colors";

type InputProps = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  onError?: boolean;
  errorMessage?: string;
};

function Input({
  type = "text",
  placeholder,
  onError,
  errorMessage,
  ...rest
}: InputProps) {
  const outerTheme = useTheme();

  const customTheme = (outerTheme: Theme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
        error: {
          main: colors.error,
        },
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              "--TextField-brandBorderColor": colors.font_primary,
              "--TextField-brandBorderHoverColor": colors.font_primary,
              "--TextField-brandBorderFocusedColor": colors.font_primary,
              "& label.Mui-focused": {
                color: colors.font_focus,
              },
              "& label.Mui-error": {
                color: colors.error,
              },
            },
          },
        },

        MuiInput: {
          styleOverrides: {
            root: {
              "&:before": {
                borderBottomColor: "var(--TextField-brandBorderColor)",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "var(--TextField-brandBorderHoverColor)",
              },
              "&:after": {
                borderBottomColor: "var(--TextField-brandBorderFocusedColor)",
              },
              "&.Mui-error:before": {
                borderBottomColor: colors.error,
              },
              "&.Mui-error:after": {
                borderBottomColor: colors.error,
              },
            },
          },
        },

        MuiFormHelperText: {
          styleOverrides: {
            root: {
              "&.Mui-error": {
                color: colors.error,
              },
            },
          },
        },
      },
    });

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <TextField
        label={placeholder}
        variant="standard"
        type={type}
        error={onError}
        helperText={errorMessage}
        {...rest}
      />
    </ThemeProvider>
  );
}

export default Input;
