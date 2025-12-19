import { toast } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning";

type ShowToastProps = {
  type: ToastType;
  message: string;
};

export function showToast({ type, message }: ShowToastProps) {
  toast[type](message);
}