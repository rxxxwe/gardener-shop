import SaleCard from "../SaleCard/SaleCard";
import "./SaleProductList.css";

function SaleProductList() {
  const saleProducts = [
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

  const sortedSaleProducts = saleProducts.sort(
    (a, b) => a.saleCardPrice - b.saleCardPrice
  );

  return (
    <div className="product-list">
      <div className="container">
        <div className="product-list__block">
          {sortedSaleProducts.map((product, index) => (
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

export default SaleProductList;
