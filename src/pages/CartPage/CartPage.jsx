import Contact from "../../components/Contact/Contact";
import ItemCardList from "../../components/ItemCardList/ItemCardList";
import NavBar from "../../components/NavBar/NavBar";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import Title from "../../components/Title/Title";
import CartContent from "../../layouts/CartContent/CartContent";
import Btn from "../../components/Btn/Btn";
import { useCart } from "../../components/CartContext/CartContext";
import { Link } from "react-router";
import "./CartPage.css";

function CartPage() {
  const { cartItems } = useCart();

  return (
    <>
      <NavBar />
      <div
        className="container"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <Title
          title={"Shopping cart"}
          linkText={"Back to the store"}
          linkRoute={"/products"}
        />

        {cartItems.length === 0 ? ( // Проверяем, пуста ли корзина
          <div className="cart-clear__block">
            <div className="cart-clear__text">
              Looks like you have no items in your basket currently.
            </div>

            <Link to={"/products"} className="cart-clear__link">
              <Btn className="cart-clear__btn">Continue Shopping</Btn>
            </Link>
          </div>
        ) : (
          <CartContent
            leftContent={<ItemCardList items={cartItems} />}
            rightContent={<OrderDetails />}
          />
        )}
      </div>
      <Contact />
    </>
  );
}

export default CartPage;
