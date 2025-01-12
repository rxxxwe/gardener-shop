import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import Discount from "../../components/Discount/Discount";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Sale from "../../components/Sale/Sale";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Categories />
      <Discount />
      <Sale />
      <Contact />
    </>
  );
}

export default HomePage;
