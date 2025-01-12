import { Link } from "react-router-dom";
import { useCart } from "../../components/CartContext/CartContext";
import "./NavBar.css";

function NavBar() {
  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__block">
          <Link to="/home">
            <img src="/icons/logo.svg" alt="Logo" width={70} height={70} />
          </Link>

          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/home" className="navbar__link">
                Main Page
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/categories" className="navbar__link">
                Categories
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/products" className="navbar__link">
                All products
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/sales" className="navbar__link">
                All sales
              </Link>
            </li>
          </ul>

          <Link to="/cart" className="navbar__cart">
            <img
              src="/icons/cart-icon.svg"
              alt="Cart Icon"
              width={48}
              height={48}
            />
            {cartCount > 0 && (
              <div className="navbar__cart-count">{cartCount}</div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
