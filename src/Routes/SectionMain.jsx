import { Link } from "react-router-dom";
import "../styles/sectionMain.scss";

export const SectionMain = () => {
  return (
    <section className="section-main">
      <h1 className="title-main">Shop | Infinite</h1>
      <p className="subtitle-main">
        E-commerce with various products, from clothing to technologies.
      </p>
      <Link to="/products" className="link-main">
        Explore more
      </Link>
    </section>
  );
};
