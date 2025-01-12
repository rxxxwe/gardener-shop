import { useCart } from "../CartContext/CartContext";
import Btn from "../Btn/Btn";
import "./OrderDetails.css";

function OrderDetails() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  const totalSum = cartItems
    .reduce((sum, item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 0;
      return sum + itemPrice * itemQuantity;
    }, 0)
    .toFixed(2);

  return (
    <div className="order-details">
      <div className="order-details__title">Order details</div>

      <div className="order-details__items-count">{totalItems} items</div>

      <div className="order-details__total-block">
        <div className="order-details__total">Total</div>
        <div className="order-details__total-sum">${totalSum}</div>
      </div>

      <div className="order-details__form-block">
        <form className="order-details__form">
          <input
            type="text"
            placeholder="Name"
            className="order-details__form-input"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="order-details__form-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="order-details__form-input"
          />
        </form>
      </div>

      <Btn className="order-details__btn">Order</Btn>
    </div>
  );
}

export default OrderDetails;
