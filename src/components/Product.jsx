import "../styles/sectionProducts.scss";
import imgStar from "../assets/star.png";
import { useContext } from "react";
import { ContextProduct } from "../context/ContextProduct";
import { useNavigate } from "react-router-dom";

export const Product = ({ item }) => {
  const { title, price, image, rating } = item;
  const {addProduct} = useContext(ContextProduct); 
  const navigate = useNavigate();

  const addToCart = (product) => {
    addProduct(product);
    navigate("/cart")
  }

  return (
    <section className="container-product">
      <img
        src={image}
        alt="image from api"
        title={title}
        width={200}
        height={250}
        className="img-product"
        loading="lazy"
      />
      <div className="product-details">
        <h3 className="title-product">{title}</h3>
        <div className="cont-rate-price">
          <h4 className="price">${price}</h4>
          <div className="rating">
            <h4 className="rate">{rating.rate}</h4>
            <img src={imgStar} alt="image star" width={20} height={20} />
          </div>
        </div>
        <button onClick={() => addToCart(item)} className="button-product">Add to cart</button>
      </div>
    </section>
  );
};
