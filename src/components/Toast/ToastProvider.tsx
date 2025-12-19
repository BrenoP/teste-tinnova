import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
    />
  );
}

export default ToastProvider;