import Contact from "../../components/Contact/Contact";
import NavBar from "../../components/NavBar/NavBar";
import SaleProductList from "../../components/SaleProductList/SaleProductList";
import Title from "../../components/Title/Title";
import "./DiscountsPage.css";

function DiscountsPage() {
  return (
    <>
      <NavBar />
      <div className="container" style={{ paddingTop: "115px" }}>
        <Title title="Discounted items" />
      </div>
      <SaleProductList />
      <Contact />
    </>
  );
}

export default DiscountsPage;
