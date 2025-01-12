import "./CartContent.css";

/* eslint-disable react/prop-types */
function CartContent({ leftContent, rightContent }) {
  return (
    <div className="cart-content">
      <div className="container">
        <div className="cart-content__wrapper">
          <div className="cart-content__left">{leftContent}</div>
          <div className="cart-content__right">{rightContent}</div>
        </div>
      </div>
    </div>
  );
}

export default CartContent;
