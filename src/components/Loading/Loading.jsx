import "./Loading.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Loading() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    loading && (
      <div style={loadingStyle}>
        <div style={spinnerStyle}></div>
      </div>
    )
  );
}

const loadingStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  zIndex: 9999,
};

const spinnerStyle = {
  width: "50px",
  height: "50px",
  border: "5px solid #ccc",
  borderTop: "5px solid #339933",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

export default Loading;
