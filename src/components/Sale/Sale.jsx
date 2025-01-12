import SaleCard from "../SaleCard/SaleCard";
import Title from "../Title/Title";
import "./Sale.css";

function Sale() {
  return (
    <div className="sale">
      <div className="container">
        <Title title="Sale" linkText="All sales" linkRoute={"/sales"} />

        <div className="sale__card-block">
          <SaleCard
            percent={50}
            saleCardImg={"/sale/sale-card-1.jpg"}
            saleCardAlt={"Sale Card 1"}
            saleCardText={"Decorative forged bridge"}
            saleCardPrice={500}
            saleCardOldPrice={1000}
          />
          <SaleCard
            percent={50}
            saleCardImg={"/sale/sale-card-2.jpg"}
            saleCardAlt={"Sale Card 1"}
            saleCardText={"Flower basket"}
            saleCardPrice={100}
            saleCardOldPrice={150}
          />
          <SaleCard
            percent={50}
            saleCardImg={"/sale/sale-card-3.jpg"}
            saleCardAlt={"Sale Card 1"}
            saleCardText={"Aquarium lock"}
            saleCardPrice={150}
            saleCardOldPrice={200}
          />
          <SaleCard
            percent={50}
            saleCardImg={"/sale/sale-card-4.jpg"}
            saleCardAlt={"Sale Card 1"}
            saleCardText={"Secateurs"}
            saleCardPrice={199}
            saleCardOldPrice={240}
          />
        </div>
      </div>
    </div>
  );
}

export default Sale;
