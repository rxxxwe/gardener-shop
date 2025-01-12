import { useState } from "react";
import { useCart } from "../CartContext/CartContext";
import "./SaleCard.css";
import Btn from "../Btn/Btn";

/* eslint-disable react/prop-types */
function SaleCard({
  percent,
  saleCardImg,
  saleCardAlt,
  saleCardText,
  saleCardPrice,
  saleCardOldPrice,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleButtonClick = () => {
    addToCart({
      id: 1,
      img: saleCardImg,
      title: saleCardText,
      price: saleCardPrice,
      oldPrice: saleCardOldPrice,
    });
    setIsAdded(true);
  };

  const truncatedText =
    saleCardText && saleCardText.length > 20
      ? saleCardText.slice(0, 20) + "..."
      : saleCardText || "";

  return (
    <div className="sale-card">
      <div className="sale-card__top">
        {percent && <div className="sale-card__percent">-{percent}%</div>}
        <img src={saleCardImg} alt={saleCardAlt} className="sale-card__img" />
        <Btn
          className={`sale-card__btn ${isAdded ? "added" : ""}`}
          onClick={handleButtonClick}
        >
          {isAdded ? "Added" : "Add to cart"}
        </Btn>
      </div>

      <div className="sale-card__bottom">
        <div className="sale-card__text">{truncatedText}</div>
        <div className="sale-card__bottom-inner">
          <div className="sale-card__price">${saleCardPrice}</div>
          {saleCardOldPrice && (
            <div className="sale-card__old-price">${saleCardOldPrice}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SaleCard;
