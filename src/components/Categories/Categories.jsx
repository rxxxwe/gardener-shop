import CategoryCard from "../CategoryCard/CategoryCard";
import Title from "../Title/Title";
import "./Categories.css";

function Categories() {
  return (
    <div className="categories">
      <div className="container">
        <Title title="Categories" linkRoute={"/categories"} />

        <div className="categories__card-block">
          <CategoryCard
            image="/categories/category-card-1.jpg"
            altText="Category 1"
          >
            Fertilizer
          </CategoryCard>
          <CategoryCard
            image="/categories/category-card-2.jpg"
            altText="Category 1"
          >
            Protective products and septic <br /> tanks
          </CategoryCard>
          <CategoryCard
            image="/categories/category-card-3.jpg"
            altText="Category 1"
          >
            Planting material
          </CategoryCard>
          <CategoryCard
            image="/categories/category-card-4.jpg"
            altText="Category 1"
          >
            Tools and equipment
          </CategoryCard>
        </div>
      </div>
    </div>
  );
}

export default Categories;
