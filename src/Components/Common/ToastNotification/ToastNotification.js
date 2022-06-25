import { toast } from "react-toastify";

export const notifySuccess = (text) => {
  toast.success(text, {
    position: "bottom-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: false,
  });
};

export const notifyError = (text) => {
  toast.error(text, {
    position: "bottom-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: false,
  });
};
