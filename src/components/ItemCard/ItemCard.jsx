import Counter from "../Counter/Counter";
import "./ItemCard.css";

/* eslint-disable react/prop-types */
function ItemCard({
  itemCardImg,
  itemCardAlt,
  itemCardTitle,
  itemCardPrice,
  itemCardOldPrice,
  onRemove,
}) {
  return (
    <div className="item-card">
      <div className="item-card__img-block">
        <img src={itemCardImg} alt={itemCardAlt} className="item-card__img" />
      </div>

      <div className="item-card__wrapper">
        <div className="item-card__block">
          <div className="item-card__title">{itemCardTitle}</div>
          <Counter />
        </div>

        <div className="item-card__price-block">
          <div className="item-card__price">${itemCardPrice}</div>
          {itemCardOldPrice && (
            <div className="item-card__old-price">${itemCardOldPrice}</div>
          )}
        </div>
      </div>

      <button className="item-card__close-btn" onClick={onRemove}>
        <img src="/close-btn.svg" alt="Close Btn" />
      </button>
    </div>
  );
}

export default ItemCard;
