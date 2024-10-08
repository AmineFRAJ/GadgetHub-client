import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearErrorsAuth } from "../JS/Actions/AuthActions";
import { clearErrorsProduct } from "../JS/Actions/ProductAction";

const ErrorNotification = ({ error }) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setshow(false);
      dispatch(clearErrorsAuth());
      dispatch(clearErrorsProduct());
    }, 3000);
  }, [show, dispatch]);

  const customId = "";
  return (
    <div>
      {show && (
        <div>
          {toast.error(error.msg, { toastId: customId })}
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            draggable
            className="toast-text"
            theme="dark"
            limit={1}
          />
        </div>
      )}
    </div>
  );
};

export default ErrorNotification;
