import { Link } from "react-router-dom";
import imgMenu from "../assets/menu.svg";
import { useState } from "react";
import "../styles/menu.scss";

export const Menu = () => {
  const [active, setActive] = useState(false);
  const isActive = () => {
    setActive(!active);
  };
  return (
    <div>
      <header className='menu'>
        <nav className={`navbar ${active ? "active" : ""}`}>
          <strong className="logo-menu">Shop | Infinite</strong>
          <img
            src={imgMenu}
            onClick={isActive}
            alt="menu"
            width={40}
            height={40}
            className="img-menu"
          />
          <div className="cont-links">
            <Link to="/" className="link-nav">
              Home
            </Link>
            <Link to="/products" className="link-nav">
              Products
            </Link>
            <Link to="/cart" className="link-nav">
              Cart
            </Link>
            <select name="" className="select-menu">
              <option value="">Categories</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men">Men's clothing</option>
              <option value="women">Women's clothing</option>
            </select>
          </div>
        </nav>
      </header>
    </div>
  );
};
