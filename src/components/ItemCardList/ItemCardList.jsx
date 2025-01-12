import { useCart } from "../CartContext/CartContext";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemCardList.css";

function ItemCardList({ items }) {
  const { removeFromCart } = useCart();

  return (
    <div className="item-card__list">
      {items.map((item, index) => (
        <ItemCard
          key={index}
          itemCardImg={item.img}
          itemCardTitle={item.title}
          itemCardPrice={item.price}
          itemCardOldPrice={item.oldPrice}
          onRemove={() => removeFromCart(item.id)}
        />
      ))}
    </div>
  );
}

export default ItemCardList;
