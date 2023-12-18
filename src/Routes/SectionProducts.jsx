import { useState } from "react";
import { Product } from "../components/Product";
import { apiProducts } from "../controllers/getApiProducts";
import { Carrusel } from "../components/Carrusel";
import { dataProducts } from "../mocks/Products";
import "../styles/sectionProducts.scss";


export const SectionProducts = () => {
  const [category, setCategory] = useState("All products");
  const [minPrice, setMinPrice] = useState(0);
  //const dataProducts = apiProducts();

  const filteredProducts = dataProducts.filter((product) => {
    const resPrice = product.price >= minPrice;
    const resCategory =
      category === "All products" || product.category === category;
    return resPrice && resCategory;
  });

  const changePrice = (e) => {
    setMinPrice(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <section className="section-products">
      <section className="category">
        <Carrusel />
        <section className="categories">
          <div
            className="cont-category"
            onClick={() => setCategory("men's clothing")}>
            <h3>Men's Clothing</h3>
          </div>
          <div
            className="cont-category"
            onClick={() => setCategory("jewelery")}>
            <h3>Jewelery</h3>
          </div>
          <div
            className="cont-category"
            onClick={() => setCategory("electronics")}>
            <h3>Electronics</h3>
          </div>
          <div
            className="cont-category"
            onClick={() => setCategory("women's clothing")}>
            <h3>Women's Clothing</h3>
          </div>
        </section>
      </section>
      <section className="filters">
        <select
          name="category"
          onChange={changeCategory}
          className="select-category">
          <option value="All products">All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
        <div className="filter-range">
          <input type="range" min={0} max={999} onChange={changePrice} />
          <h3 className="title-price">From: ${minPrice}</h3>
        </div>
      </section>
      <h2 className="title-category">{category}</h2>
      <section className="all-products">
        {filteredProducts &&
          filteredProducts.map((item) => <Product key={item.id} item={item} />)}
      </section>
    </section>
  );
};
