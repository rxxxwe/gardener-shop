import "./Btn.css";

/* eslint-disable react/prop-types */
function Btn({ children, type = "btn", style, className, onClick }) {
  return (
    <button
      type={type}
      style={style}
      className={`btn ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Btn;
