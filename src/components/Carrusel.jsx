import { useEffect, useState } from "react";
import { apiProducts } from "../controllers/getApiProducts";
import "../styles/carrusel.scss";
import { dataProducts } from "../mocks/Products";

export const Carrusel = () => {
  const [selected, setSelected] = useState(0);
  //const dataProducts = apiProducts();
  const products = dataProducts.slice(0, 5);

  const next = () => {
    setSelected(selected === products.length - 1 ? 0 : selected + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <section className="section-carrusel">
      {products.map(
        (item, index) =>
          selected === index && (
            <div key={item.id} className="product-carrusel">
              <img
                src={item.image}
                alt="image from api"
                title={item.title}
                width={200}
                height={300}
              />
              <div className="details">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <strong>${item.price}</strong>
              </div>
            </div>
          )
      )}
    </section>
  );
};
