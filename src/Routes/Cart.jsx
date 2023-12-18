import { useContext } from "react";
import { ProductCart } from "../components/ProductCart";
import { ContextProduct } from "../context/ContextProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/cart.scss";

const options = {
  position: "top-right",
  pauseOnHover: false,
  autoClose: 3000,
  theme: "dark",
}

export const Cart = () => {
  const { cart, shopAllProducts, clearCart } = useContext(ContextProduct);

  const messageDelete = () =>
    toast.success("It has been successfully removed.", options);

const messageBuy = () => 
    toast.success("Purchase made", options);  
  

  const shopProducts = () => {
    shopAllProducts();
    toast.success("purchase made successfully", options)
  } 

  const clearProducts = () => {
    clearCart()
    toast.success("The products were removed from the cart.", options)
  }

  return (
    <section className="cart">
      <ToastContainer />

      {cart.length > 0 ? (
        cart.map((item) => (
          <ProductCart
            key={item.id}
            item={item}
            messageDelete={messageDelete}
            messageBuy={messageBuy}
          />
        ))
      ) : (
        <h1 className="no-products">no added products</h1>
      )}
      {cart.length > 0 && (
        <>
          <button onClick={shopProducts} className="btn-cart">
            Shop all products
          </button>
          <button onClick={clearProducts} className="btn-cart">
            Clear cart
          </button>
        </>
      )}
    </section>
  );
};
