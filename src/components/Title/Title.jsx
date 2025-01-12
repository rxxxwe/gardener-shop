import { Link } from "react-router-dom";
import "./Title.css";

/* eslint-disable react/prop-types */
function Title({ title, linkText, linkRoute }) {
  return (
    <div className="title-wrapper">
      <h2 className="title">{title}</h2>

      {linkText && (
        <Link to={linkRoute} className="title__link">
          <div className="title__link-inner">{linkText}</div>
        </Link>
      )}
    </div>
  );
}

export default Title;
