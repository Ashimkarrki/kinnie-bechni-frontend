import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  image,
  name,
  id,
  price,
  stock,
  description,
  category,
}) => {
  if (!id) {
    return (
      <div className="productCard productCard--box-shadow link">
        <div className="ribbon-wrapper">
          <p className="ribbon">{category}</p>
        </div>
        <img className="productCard__image" src={image} alt="an pic" />
        <h5>{name}</h5>
        <h5>रु {price}</h5>
        <h5>{stock}(In Stock)</h5>
        <p className="productCard__description">{description}</p>
      </div>
    );
  }
  return (
    <Link
      to={`/product/${category}/${id}`}
      className="productCard productCard--box-shadow link"
    >
      <div className="ribbon-wrapper">
        <p className="ribbon">{category}</p>
      </div>
      <img className="productCard__image" src={image} alt="an pic" />
      <h5>{name}</h5>
      <h5>रु {price}</h5>
      <h5>{stock}(In Stock)</h5>
      <p className="productCard__description">{description}</p>
    </Link>
  );
};

export default ProductCard;
