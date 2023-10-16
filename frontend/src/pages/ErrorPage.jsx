import { Link } from "react-router-dom"
import Fantom from "../assets/undraw_halloween_re_2kq1.svg"

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-image">
        <img src={Fantom} alt={"Not Found"} className="error-image-draw" />
        <h1 className="error-image-title">4 4</h1>
      </div>
      <p className="error-content">{"Sorry, we don't see it."}</p>
      <Link to="/" className="error-link">
        Back Home
      </Link>
    </div>
  )
}
