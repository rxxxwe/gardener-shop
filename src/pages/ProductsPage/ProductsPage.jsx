import "./ProductsPage.css";
import NavBar from "../../components/NavBar/NavBar";
import Contact from "../../components/Contact/Contact";
import ProductList from "../../components/ProductList/ProductList";
import Title from "../../components/Title/Title";

function ProductsPage() {
  return (
    <>
      <NavBar />
      <div className="container" style={{ paddingTop: "115px" }}>
        <Title title="All products" />
      </div>
      <ProductList />
      <Contact />
    </>
  );
}

export default ProductsPage;
