import image from "../assets/page404.svg"; 
import { Link } from "react-router-dom";
import "../styles/page404.scss"

export const Page404 = () => {
  return (
    <section className="section-404">
      <img className="img-404" src={image} width={600} height={500} alt="page 404" title="page 404" />
      <p className="title-404">
      Page not found, route request not found. Try going to <Link to="/">Home</Link>
      </p>
    </section>
  )
}
