import { Link } from "react-router-dom";
import "./NotFound.css";
import Btn from "../Btn/Btn";

function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found__content">
          <img src="/4.png" alt="" width={180} height={245} />
          <img src="/cactus.png" alt="" width={300} height={270} />
          <img src="/4.png" alt="" width={180} height={245} />
        </div>

        <h2 className="not-found__title">Page Not Found</h2>

        <div className="not-found__text">
          We`re sorry, the page you requested could not be found. <br /> Please
          go back to the homepage.
        </div>

        <Link to={"/home"} className="not-found__link">
          <Btn className="not-found__btn">Go Home</Btn>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
