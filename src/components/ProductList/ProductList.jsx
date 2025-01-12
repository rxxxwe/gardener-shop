import SaleCard from "../SaleCard/SaleCard";
import "./ProductList.css";

function ProductList() {
  const products = [
    {
      percent: 17,
      saleCardImg: "/sale/sale-card-4.jpg",
      saleCardText: "Secateurs",
      saleCardPrice: 199,
      saleCardOldPrice: 240,
    },
    {
      percent: 26,
      saleCardImg: "/sale/sale-card-5.jpg",
      saleCardText: "Collection for berries (plastic)",
      saleCardPrice: 26,
      saleCardOldPrice: 35,
    },
    {
      percent: 36,
      saleCardImg: "/sale/sale-card-6.jpg",
      saleCardText: "Gloves (black)",
      saleCardPrice: 9,
      saleCardOldPrice: 14,
    },
    {
      saleCardImg: "/sale/sale-card-7.jpg",
      saleCardText: "Sickle-shaped hacksaw",
      saleCardPrice: 155,
    },
    {
      saleCardImg: "/sale/sale-card-8.jpg",
      saleCardText: "Bayonet shovel",
      saleCardPrice: 180,
    },
    {
      saleCardImg: "/sale/sale-card-9.jpg",
      saleCardText: "Garden pitchfork",
      saleCardPrice: 179,
    },
    {
      saleCardImg: "/sale/sale-card-10.jpg",
      saleCardText: "Barbell",
      saleCardPrice: 12,
    },
    {
      percent: 18,
      saleCardImg: "/sale/sale-card-11.jpg",
      saleCardText: "Souvenir thermometer",
      saleCardPrice: 98,
      saleCardOldPrice: 120,
    },
    {
      percent: 50,
      saleCardImg: "/sale/sale-card-1.jpg",
      saleCardText: "Decorative forged bridge",
      saleCardPrice: 500,
      saleCardOldPrice: 1000,
    },
    {
      percent: 34,
      saleCardImg: "/sale/sale-card-2.jpg",
      saleCardText: "Flower basket",
      saleCardPrice: 100,
      saleCardOldPrice: 150,
    },
    {
      percent: 25,
      saleCardImg: "/sale/sale-card-3.jpg",
      saleCardText: "Aquarium lock",
      saleCardPrice: 150,
      saleCardOldPrice: 200,
    },
  ];

  const sortedProducts = products.sort(
    (a, b) => a.saleCardPrice - b.saleCardPrice
  );

  return (
    <div className="product-list">
      <div className="container">
        <div className="product-list__block">
          {sortedProducts.map((product, index) => (
            <SaleCard
              key={index}
              percent={product.percent}
              saleCardImg={product.saleCardImg}
              saleCardText={product.saleCardText}
              saleCardPrice={product.saleCardPrice}
              saleCardOldPrice={product.saleCardOldPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
