import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "../App.css";

const ToastBar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const timeoutRef = useRef(null);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      timeoutRef.current = setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    },
  }));

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="toast-bar"
      id={showSnackbar ? "show" : "hide"}
      style={{
        backgroundColor: props.notification.success ? "#3fff14" : "#FF0033",
      }}
    >
      <div className="message">{props.notification.message}</div>
      <div className="symbol">
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
});

export default ToastBar;
