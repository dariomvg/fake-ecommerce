import { useContext } from "react";
import { ContextProduct } from "../context/ContextProduct";
import "../styles/cart.scss";


export const ProductCart = ({item, messageDelete, messageBuy}) => {
  
  const { title, image, description, price, id, quantity } = item;
  const {removeProduct, buyOneCart} = useContext(ContextProduct); 

  const removeFromCart = (item) => {
    removeProduct(item);
    messageDelete()
  }; 

  const buyProduct = (id) => {
    buyOneCart(id);
    messageBuy();
  }

  return (
    <section className="product-cart">
      <img
        src={image}
        alt="image from api"
        loading="lazy"
        title={title}
        width={200}
        height={250}
        className="img-cart"
      />
      <div className="detail-cart">
        <h3 className="title-cart">
          {title}
        </h3>
        <p className="desc-cart">
          {description}
        </p>
        <strong className="price-cart">${price}</strong>
        <strong className="quantity">Quantity: {quantity}</strong>
        <div className="cont-btns">
        <button onClick={() => buyProduct(id)} className="button-cart buy">Buy product</button>
        <button onClick={() => removeFromCart(item)} className="button-cart delete">delete from cart</button>
        </div>
      </div>
    </section>
  );
};
