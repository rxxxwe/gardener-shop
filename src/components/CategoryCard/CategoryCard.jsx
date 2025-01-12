import "./CategoryCard.css";

/* eslint-disable react/prop-types */
function CategoryCard({ image, altText, children }) {
  return (
    <div className="category-card">
      <img
        src={image}
        alt={altText}
        className="category-card__image"
        width={316}
        height={350}
      />
      <div className="category-card__text">{children}</div>
    </div>
  );
}

export default CategoryCard;
