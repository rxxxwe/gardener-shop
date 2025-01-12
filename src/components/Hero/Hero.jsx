import { Link } from "react-router-dom";
import Btn from "../Btn/Btn";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__block">
          <h1 className="hero__title">
            Amazing Discounts <br /> on Garden Products!
          </h1>

          <Link to={"/products"}>
            <Btn>Check out</Btn>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
